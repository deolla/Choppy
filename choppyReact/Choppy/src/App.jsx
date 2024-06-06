// App.jsx
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/header/header.component';
import HeroSection from './components/heroSection/heroSection.component';
import RecipeSection from './components/recipeSection/recipeSection.component';
import './App.css';
const App = () => {
    return (
        <Router>
            <NavBar />
            <HeroSection />
            <RecipeSection />
        </Router>
    );
}

export default App;
