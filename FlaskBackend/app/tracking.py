from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort
from app.auth import login_required
from app.db import get_db
from mysql.connector import Error

bp = Blueprint('tracking', __name__, url_prefix='/api/tracking')

@bp.route('/browse', methods=('POST',))
@login_required
def browse():
    """
    Save the browse history of the user.

    :API: POST /api/tracking/browse

    The request body should be a JSON object with the following structure:
    {
        "browse": string
    }

    :return: 1 of the following cases:
    - Successful: {"success": True, "message": "Save browse history successful!"}, 200
    """
    if request.method == 'POST':
        data = request.get_json()

        browse = data.get('browse')

        db = get_db()
        
        with db.cursor() as cursor:
            cursor.execute(
                'INSERT INTO BrowseHistory (content, accountId) VALUES (%s, %s)',
                (browse, g.user['accountId'])
            )

        db.commit()

        return {'success': True, 'message': 'Save browse history successful!'}, 200