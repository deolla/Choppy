#!/usr/bin/env python3
"""This is the route for the app."""
from models import db, app
from models.user import *
from models.recipe import *
from models.ingredient import *
from models.review import *
from models.chatroom import *
from models.message import *
from models.base import *

with app.app_context():
    db.create_all()
    db.session.commit()


if __name__ == "__main__":
    app.run(debug=True)

