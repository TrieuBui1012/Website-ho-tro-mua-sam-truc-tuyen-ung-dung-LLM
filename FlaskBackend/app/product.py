from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort
from app.auth import login_required
from app.db import get_db
from mysql.connector import Error

bp = Blueprint('product', __name__, url_prefix='/api/product')