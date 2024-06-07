import { Link } from "react-router-dom";
import "./Header.styles.css";
import Logo from "../../images/logo.png";
import { useState } from "react";


const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src={Logo} alt="logo" />
        </Link>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className="menu-icon">&#9776;</span>
      </button>
      <nav className={`nav-links ${isMobileMenuOpen ? "mobile-open": ""}`}>
        <Link to="/">Home</Link>
        <div className="dropdown" role="menu">
          <Link to="/recipes" className="dropdown-toggle" aria-haspopup="true">
            Meat/Seafood Recipes
          </Link>
          <div className="dropdown-menu">
            <Link to="/recipes/category1">Chicken Recipes</Link>
            <Link to="/recipes/category2">Pork Chop Recipes</Link>
            <Link to="/recipes/category3">Ground Beef Recipes</Link>
            <Link to="/recipes/category3">Shrimp Recipes</Link>
            <Link to="/recipes/category3">Salmon Recipes</Link>
          </div>
        </div>
        <div className="dropdown" role="menu">
          <Link to="/recipes" className="dropdown-toggle" aria-haspopup="true">
            Health & Dietary
          </Link>
          <div className="dropdown-menu">
            <Link to="/recipes/category1">Keto Recipes</Link>
            <Link to="/recipes/category2">Vegetarian Recipes</Link>
            <Link to="/recipes/category3">Weight Loss Recipes</Link>
            <Link to="/recipes/category3">Low-Crab Recipes</Link>
            <Link to="/recipes/category3">Gluten-Free Recipes</Link>
            <Link to="/recipes/category4">Healthy Recipes</Link>
            <Link to="/recipes/see-more" className="see-more">
              see more
            </Link>
          </div>
        </div>
        <div className="dropdown" role="menu">
          <Link to="/recipes" className="dropdown-toggle" aria-haspopup="true">
            Countries Meal
          </Link>
          <div className="dropdown-menu">
            <Link to="/recipes/category1">African Recipes</Link>
            <Link to="/recipes/category2">Mexican Recipes</Link>
            <Link to="/recipes/category3">Italian Recipes</Link>
            <Link to="/recipes/category3">Indian Recipes</Link>
            <Link to="/recipes/category3">Korean Recipes</Link>
            <Link to="/recipes/category3">Thai Recipes</Link>
            <Link to="/recipes/category3">French Recipes</Link>
            <Link to="/recipes/category3">Chinese Recipes</Link>
            <Link to="/recipes/category3">Japanses Recipes</Link>
            <Link to="/recipes/category3">Spanish Recipes</Link>
            <Link to="/recipes/category3">Latin Recipes</Link>
          </div>
        </div>
        <div className="dropdown" role="menu">
          <Link to="/about" className="dropdown-toggle" aria-haspopup="true">About</Link>
          <div className="dropdown-menu">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
        <Link to="/start-here">Start Here</Link>
      </nav>
    </header>
  );
};

export default NavBar;
