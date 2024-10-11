from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
import sqlite3
from mysql.connector import Error

from app.db import get_db

bp = Blueprint('data', __name__, url_prefix='/api/data')

batch_size = 5000

@bp.route('/load_tiki', methods=('POST',))
def load_tiki():
    """Load data from Tiki into the database.

    This function will delete all records in `Category` and `Product` tables
    that have origin "tiki", and then insert all records from `category` and
    `product` tables in the Tiki database into the corresponding tables in the
    main database. The records in `Product_Category` table will also be updated
    accordingly.

    :API: POST /api/data/load_tiki

    :return: 1 of the following cases:
    - Successful: {"success": True, "message": "Load Tiki data successful!"}, 201
    - Failed to take tiki data: {"success": False, "message": "Cannot take the Tiki data."}, 404
    - Failed to put data into database: {"success": False, "message": "Cannot put the Tiki data into the database."}, 409
    - Code Error: response code: 500
    """
    if request.method == 'POST':
        db = get_db()
        tiki_conn = sqlite3.connect('tiki/tiki.db')
        try:
            tiki_cursor = tiki_conn.cursor()
            db_cursor = db.cursor()
            db_cursor.execute('DELETE FROM Product_Category WHERE productOrigin = "tiki"')
            db_cursor.execute('DELETE FROM Product WHERE origin = "tiki"')
            db_cursor.execute('SET FOREIGN_KEY_CHECKS = 0')
            db_cursor.execute('DELETE FROM Category WHERE origin = "tiki"')
            db_cursor.execute('SET FOREIGN_KEY_CHECKS = 1')
            db.commit()
            tiki_cursor.execute('SELECT id, name, thumbnail_url, is_leaf FROM category')
            while True:
                rows = tiki_cursor.fetchmany(batch_size)
                if not rows:
                    break
                for row in rows:
                    db_cursor.execute(
                        'INSERT INTO Category (categoryId, origin, name, imgUrl, isLeaf) VALUES (%s,%s,%s,%s,%s)',
                        (row[0], 'tiki', row[1], row[2], row[3])
                    )
            tiki_cursor.execute('SELECT id, parent_id FROM category')
            while True:
                rows = tiki_cursor.fetchmany(batch_size)
                if not rows:
                    break
                for row in rows:
                    db_cursor.execute(
                        'UPDATE Category SET parentId = %s, parentOrigin = %s WHERE categoryId = %s AND origin = %s',
                        (row[1], 'tiki' if row[1] else None, row[0], 'tiki')
                    )
            tiki_cursor.execute('SELECT id, thumbnail_url, name, link, quantity_sold, price, review_count, rating_average, seller_name, brand_name FROM product')
            while True:
                rows = tiki_cursor.fetchmany(batch_size)
                if not rows:
                    break
                for row in rows:
                    db_cursor.execute(
                        'INSERT INTO Product (productId, origin, imgURL, name, link, quantitySold, price, reviewCount, rating, sellerName, brandName) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',
                        (row[0], 'tiki', row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9])
                    )
            db_cursor.execute('SELECT categoryId FROM Category WHERE origin = "tiki"')
            category_ids = [i[0] for i in db_cursor.fetchall()]
            tiki_cursor.execute('SELECT id, category_path FROM product')
            while True:
                rows = tiki_cursor.fetchmany(batch_size)
                if not rows:
                    break
                for row in rows:
                    path = row[1].strip('[]').split(', ')
                    path = [i.strip("'") for i in path]
                    int_path = [int(i) for i in path]
                    for i in int_path:
                        if i in category_ids:
                            db_cursor.execute(
                                'INSERT INTO Product_Category (productId, categoryId, productOrigin, categoryOrigin) VALUES (%s,%s,%s,%s)',
                                (row[0], i, 'tiki', 'tiki')
                            )
            db.commit()
        except sqlite3.Error as e:
            print(e)
            return {"success": False, "message": "Cannot take the Tiki data."}, 404
        except Error as e:
            print(e)
            db.rollback()
            return {"success": False, "message": "Cannot put the Tiki data into the database."}, 409
        finally:
            db_cursor.close()
            tiki_cursor.close()
            tiki_conn.close()

        return {"success": True, "message": "Load Tiki data successful!"}, 201
