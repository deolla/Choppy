// src/pages/QuickAndEasyPage.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const QuickAndEasyPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://api.spoonacular.com/recipes/complexSearch', {
      params: {
        apiKey: 'b993458567154e8388078ebc1b8ade49',  // Replace with your API key
        tags: 'quick-and-easy'
      }
    })
    .then(response => setRecipes(response.data.results))
    .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Quick and Easy Recipes</h1>
      <div className="recipes-container">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAndEasyPage;
