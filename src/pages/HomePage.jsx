// Home page.
import NavBar from "../components/header/Header.component";
import HeroSection from "../components/heroSection/slider.component";
import RecipeSection from "../components/recipeSection/Recipes.component";
import TrendingNow from "../components/trendingNow/TrendingNow.component";


const HomePage = () => (
  <div>
    <NavBar />
    <HeroSection />
    <RecipeSection />
    <TrendingNow />
  </div>
);

export default HomePage;
