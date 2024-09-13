// src/components/Header.jsx
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'remixicon/fonts/remixicon.css';
import './header.styles.css';
import logo from '../../images/logo.png';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleNav = () => setNavOpen(!isNavOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);
  const toggleLogin = () => setLoginOpen(!isLoginOpen);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo"><img src={logo}/></a>

          <div className={`nav__menu ${isNavOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Recipes</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Drinks</a></li>
              <li className="nav__item"><a href="#" className="nav__link">About Us</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Contact Me</a></li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleNav}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn" onClick={toggleSearch}></i>
            <i className="ri-user-line nav__login" id="login-btn" onClick={toggleLogin}></i>
            <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      <div className={`search ${isSearchOpen ? 'show-search' : ''}`} id="search">
        <form action="" className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input type="search" placeholder="I want to cook ?" className="search__input" />
        </form>
        <i className="ri-close-line search__close" id="search-close" onClick={toggleSearch}></i>
      </div>

      <div className={`login ${isLoginOpen ? 'show-login' : ''}`} id="login">
        <form action="" className="login__form">
          <h2 className="login__title">Log In</h2>
          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label">Email</label>
              <input type="email" placeholder="Write your email" id="email" className="login__input" />
            </div>
            <div>
              <label htmlFor="password" className="login__label">Password</label>
              <input type="password" placeholder="Enter your password" id="password" className="login__input" />
            </div>
          </div>
          <div>
            <p className="login__signup">You do not have an account? <a href="#">Sign up</a></p>
            <a href="#" className="login__forgot">You forgot your password</a>
            <button type="submit" className="login__button">Log In</button>
          </div>
        </form>
        <i className="ri-close-line login__close" id="login-close" onClick={toggleLogin}></i>
      </div>
    </>
  );
};

export default Header;
