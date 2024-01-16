#!/usr/bin/env python3
"""Define a recipe class that inherits from base."""
from models import db
from models.base import *

class Recipe(Base, db.Model):
    """This class inherits from base and db.Model."""
    __tablename__ = 'recipe'
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(1024), nullable=False)
    user_id = db.Column(db.String(60), db.ForeignKey('user.id'), nullable=False)

    # ingredients = db.relationship("Ingredient", backref="recipe")
