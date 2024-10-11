from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort
from app.auth import login_required
from app.db import get_db
from mysql.connector import Error

bp = Blueprint('product', __name__, url_prefix='/api/product')

def get_categories(origin: str) -> list[dict]:
    """
    Get all categories from database by origin.

    :param origin: Origin of categories, can be "tiki" or "lazada".
    :type origin: str
    :return: List of categories
    :rtype: list[dict]
    :raises: mysql.connector.Error
    """
    db = get_db()
    res = []
    with db.cursor(dictionary=True) as cursor:
        cursor.execute('SELECT categoryId, origin, name, imgURL, isLeaf FROM Category WHERE parentId IS NULL AND origin = %s', (origin,))
        categories = cursor.fetchall()
        
        for c in categories:
            res.append({
                'categoryId': c['categoryId'],
                'origin': c['origin'],
                'name': c['name'],
                'imgURL': c['imgURL'],
                'isLeaf': c['isLeaf'],
                'children': []
            })

        is_not_leaf_queue = []
        for c in res:
            if c['isLeaf']:
                continue
            else:
                is_not_leaf_queue.append(c)

        while len(is_not_leaf_queue) > 0:
            cur_category = is_not_leaf_queue.pop(0)
            cursor.execute('SELECT categoryId, origin, name, imgURL, isLeaf FROM Category WHERE parentId = %s AND origin = %s', (cur_category['categoryId'], origin))
            categories = cursor.fetchall()

            for c in categories:
                cur_category['children'].append({
                    'categoryId': c['categoryId'],
                    'origin': c['origin'],
                    'name': c['name'],
                    'imgURL': c['imgURL'],
                    'isLeaf': c['isLeaf'],
                    'children': []
                })
                if not c['isLeaf']:
                    is_not_leaf_queue.append(cur_category['children'][-1])

    return res

@bp.route('/<string:origin>/get_categories')
def get_categories_by_origin(origin: str):
    """
    Get all categories from Tiki.

    :API: GET /api/product//<string:origin>/get_categories

    :param origin: The origin of the category, can be "tiki" or "lazada".

    :return: 1 of the following cases:
    - Successful: {"success": True, "data": categories}, 200
    - No categories found: {"success": False, "message": "No categories found."}, 404
    :dataformat: json with the following structure:
    {
        "categoryId": int,
        "name": string,
        "imgURL": string,
        "isLeaf": bool,
        "children": [
            {
                "categoryId": int,
                "name": string,
                "imgURL": string,
                "isLeaf": bool,
                "children": []
            }
        ]
    }
    """
    res = get_categories(origin)
    if len(res) == 0:
        return {"success": False, "message": "No categories found."}, 404
    else:
        return {"success": True, "data": res}, 200

@bp.route('/<string:origin>/category/<int:categoryId>/<int:page>')
def get_products_by_category(origin: str, categoryId: int, page: int):
    """
    Get all products in a category from the given origin.

    :API: GET /api/product/<string:origin>/category/<int:categoryId>/<int:page>

    :param origin: The origin of the category, can be "tiki" or "lazada".
    :param categoryId: The id of the category.
    :param page: The page number of the products to be retrieved.

    :return: 1 of the following cases:
    - Successful: {"success": True, "current_page": int, "max_page": int, "per_page": int, "total_products": int, "data": products}, 200
    - No products found: {"success": False, "message": "No products found."}, 404
    - Invalid page number: {"success": False, "message": "Invalid page number."}, 404
    :dataformat: json with the following structure:
    {
        "productId": int,
        "origin": string,
        "imgURL": string,
        "name": string,
        "quantitySold": int,
        "price": float,
        "reviewCount": int,
        "rating": float
    }
    """
    if page < 1:
        return {"success": False, "message": "Invalid page number."}, 404
    db = get_db()
    per_page = 40

    with db.cursor(dictionary=True) as cursor:
        cursor.execute(
            '''SELECT Product.productId, Product.origin, Product.imgURL, Product.name, Product.quantitySold, Product.price, Product.reviewCount, Product.rating
            FROM Category
            JOIN Product_Category ON Category.categoryId = Product_Category.categoryId AND Category.origin = Product_Category.categoryOrigin
            JOIN Product ON Product.productId = Product_Category.productId AND Product.origin = Product_Category.productOrigin
            WHERE Category.categoryId = %s AND Category.origin = %s
            ''',
            (categoryId, origin)
        )
        products = cursor.fetchall()

        if len(products) == 0:
            return {"success": False, "message": "No products found."}, 404
        else:
            start = (page - 1) * per_page
            end = start + per_page
            bonus_page = 0 if len(products) % per_page == 0 else 1
            max_page = len(products) // per_page + bonus_page
            if page > max_page:
                return {"success": False, "message": "Invalid page number."}, 404
            return {"success": True, "current_page": page, "max_page": max_page, "per_page": per_page, "total_products": len(products), "data": products[start:end]}, 200

@bp.route('/<string:origin>/product/<int:productId>')
def get_product_by_id(origin: str, productId: int):
    """
    Get a product by its id from the given origin.

    :API: GET /api/product/<string:origin>/product/<int:productId>

    :param origin: The origin of the product, can be "tiki" or "lazada".
    :param productId: The id of the product.

    :return: 1 of the following cases:
    - Successful: {"success": True, "data": product}, 200
    - Product not found: {"success": False, "message": "Product not found."}, 404
    :dataformat: json with the following structure:
    {
        "productId": int,
        "origin": string,
        "imgURL": string,
        "name": string,
        "link": string,
        "quantitySold": int,
        "price": float,
        "reviewCount": int,
        "rating": float,
        "sellerName": string,
        "brandName": string,
        "reviewSummary": string
    }
    """
    db = get_db()
    with db.cursor(dictionary=True) as cursor:
        cursor.execute('SELECT productId, origin, imgURL, name, link, quantitySold, price, reviewCount, rating, sellerName, brandName FROM Product WHERE productId = %s AND origin = %s', (productId, origin))
        product = cursor.fetchone()

        if product is None:
            return {"success": False, "message": "Product not found."}, 404
        else:
            product['reviewSummary'] = '- Ưu điểm: Sản phẩm tốt<br>-Nhược điểm: Sản phẩm không tốt'
            return {"success": True, "data": product}, 200