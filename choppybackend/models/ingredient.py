#!/usr/bin/env python3
"""Define an ingredient class for the ingredient table in database."""
from models import db
from models.base import Base

class Ingredient(Base, db.Model):
    """The ingredient class inherits from base."""
    
    __tablename__ = 'ingredient'
    
    name = db.Column(db.String(128), nullable=False)
    recipe_id = db.Column(db.String(60), db.ForeignKey('recipe.id'), nullable=False)
    
    recipe = db.relationship("Recipe", backref="recipe")
