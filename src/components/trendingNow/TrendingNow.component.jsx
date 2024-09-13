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
            number: 6
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
      <div className="heading-container">
        <h2 className="section-title">Trending Recipes</h2>
        <a href="#" className="view-all-link">View All</a>
      </div>
      <div className="card-container">
        {recipes.map((recipe, index) => (
          <a key={index} href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.title} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{recipe.title}</h3>
                <p className="card-info">{recipe.summary}</p>
                <button className="card-btn">View Recipe</button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FoodTrends;
