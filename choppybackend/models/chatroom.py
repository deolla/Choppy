#!/usr/bin/env python3
"""Define a chatroom class for the chatroom table in database."""
from models import db
from models.base import Base

user_chatrooms = db.Table(
    "user_chatrooms",
    db.Column("user_id", db.String, db.ForeignKey("user.id")),
    db.Column("chatroom_id", db.String, db.ForeignKey("chatroom.id")),
)

class Chatroom(Base, db.Model):
    """The chatroom class for the chatroom table in database."""
    __tablename__ = 'chatroom'

    name = db.Column(db.String(128), nullable=False)
    active = db.Column(db.Integer, default=0, nullable=False)
    creator_id = db.Column(db.String(128), db.ForeignKey("user.id"), nullable=False)

    creator = db.relationship(
        "User", backref="create_chatrooms", lazy="dynamic"
        )
    messages = db.relationship("ChatMessage", backref="chatroom")

    # users = db.relationship(
        # "User", secondary=user_chatroom, backpopulate="chatroom",
    #)
