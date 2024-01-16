#!/usr/bin/env python3
"""Define a review class for the review table in database."""
from models.base import *
from models import db

class Review(Base):
    """The review class inherits from base."""
    
    __tablename__ = 'reviews'
    
    user_id = db.Column(db.String(60), db.ForeignKey('user.id'), nullable=False)
    recipe_id = db.Column(db.String(60), db.ForeignKey('recipe.id'), nullable=False)
    text = db.Column(db.String(1024), nullable=False)

    user = db.relationship("User", backref="user")
