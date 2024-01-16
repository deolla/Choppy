#!/usr/bin/python3
from models import db
from models.base import Base

"""Chatroom model"""


class ChatMessage(Base):
    """the chatroom model to handle users and chats"""

    __tablename__ = "message"
    text = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.String(60), db.ForeignKey("user.id"), nullable=False)
    chatroom_id = db.Column(
        db.String(60), db.ForeignKey("chatroom.id"), nullable=False
    )
    user = db.relationship("User", backref="message")
