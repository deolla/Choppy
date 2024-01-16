#!/usr/bin/env python3
"""Define a chatroom class for the chatroom table in database."""
from models import db
from models.base import Base
from models.user import user_chatrooms

class Chatroom(Base):
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
