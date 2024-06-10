// src/components/FoodTrends/FoodTrends.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './TrendingNow.styles.css';

const apiKey = import.meta.env.VITE_SPON_API_KEY;

const FoodTrends = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            apiKey: apiKey,
            number: 4
          }
        });
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="food-trends-section">
      <h2 className="section-title">Trending Recipes</h2>
      <a href="#" className="view-all-link">View All</a>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <a key={index} href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <div className="recipe-details">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">{recipe.summary}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FoodTrends;
