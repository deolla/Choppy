// src/components/RecipeSection/RecipeSection.jsx
import './Recipes.styles.css';
import food1 from '../../images/food/food1.jpg';
import food2 from '../../images/food/food2.jpg';
import food3 from '../../images/food/food3.jpg';
import food4 from '../../images/food/food4.jpg';

const recipes = [
  { img: food1, label: 'Quick and Easy', link: '/quick-and-easy' },
  { img: food2, label: 'Dinner', link: '/dinner' },
  { img: food3, label: 'Healthy', link: '/healthy' },
  { img: food4, label: '5 Ingredients', link: '/five-ingredients' },
  { img: food1, label: 'Breakfast', link: '/breakfast' },
];

const exploreMore = [
  { img: food1, label: 'Comfort Food Classics', link: '/comfort-food' },
  { img: food2, label: 'International Eats', link: '/international-eats' },
  { img: food3, label: 'Breakfast & Brunch', link: '/breakfast-brunch' },
  { img: food2, label: 'Community Picks', link: '/community-picks' },
  { img: food3, label: 'Quick & Easy', link: '/quick-easy' },
  { img: food1, label: 'Copycat Recipes', link: '/copycat-recipes' }
];

const Recipes = () => {
  return (
    <div>
      <div className='section-title'>
        <h2>Simple Recipes Made for <em>real, actual, everyday life</em>.</h2>
      </div>
      <div className="recipe-section">
        <div className="recipes-container">
          {recipes.map((recipe, index) => (
            <a href={recipe.link} className="recipe-card" key={index}>
              <img src={recipe.img} alt={recipe.label} className="recipe-image" />
              <div className="recipe-label">{recipe.label}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="explore-more-container">
          {exploreMore.map((item, index) => (
            <a href={item.link} className="explore-more-card" key={index}>
              <img src={item.img} alt={item.label} className="explore-more-image" />
              <div className="explore-more-label">{item.label}</div>
            </a>
          ))}
        </div>
    </div>
  );
};

export default Recipes;
