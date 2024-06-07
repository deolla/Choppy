import { useState, useEffect } from "react";
import "./TrendingNow.styles.css";

const trendingRecipes = [];

const TrendingNow = () => {
  const [recipes, setTrending] = useState(trendingRecipes);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=4&apiKey=b993458567154e8388078ebc1b8ade49&includeNutrition=true"
        );
        const data = await response.json();
        setTrending(data.recipes);
      } catch (error) {
        console.error(`Error retriving recipes:`, error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="trending-now">
      <div className="trending-container">
        <h2>Trending Now</h2>
        <a href="#">View All</a>
      </div>
      <div className="trending-recipes">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
