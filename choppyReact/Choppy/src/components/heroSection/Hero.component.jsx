import './Hero.styles.css';

const Hero = () => {
  return (
    <div className="code">
      <header className="content">
        <h1 className="title">Welcome to Choopy</h1>
        <div className="text">
        Choopy offers a collection of delicious recipes for both seasoned and beginner chefs, encouraging them to unleash their inner hero and embark on culinary adventures.
        </div>
      </header>
      <footer className="footer">
        <a className="ripple">Get Started now</a>
      </footer>

      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
};

export default Hero;
