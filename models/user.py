#!/usr/bin/env python3
"""Define a user class for the user table in the database."""

from models import db, app
from models.base import Base
from models.chatroom import *


user_chatrooms = db.Table(
    "user_chatrooms",
    db.Column("user_id", db.String, db.ForeignKey("user.id")),
    db.Column("chatroom_id", db.String, db.ForeignKey("chatroom.id")),
)

class User(Base):
    """The user class inherits from base and db.Model."""

    __tablename__ = 'user'
    
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    username = db.Column(db.String(128), nullable=False)
    # subscribed = db.Column(db.Boolean, default=False,)
    password_reset_token = db.Column(db.String(128), unique=True, nullable=True)

    chatrooms = db.relationship(
        "Chatroom", secondary=user_chatrooms, backref="members", lazy="dynamic"
    )
    recipes = db.relationship("Recipe", backref="user", lazy="dynamic")
