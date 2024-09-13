// Header.jsx
import { useState } from 'react';
import './slider.styles.css';
import recipe from '../../images/food/food1.jpg';
import recipe1 from '../../images/food/food1.jpg';
import recipe2 from '../../images/food/food2.jpg';
import recipe3 from '../../images/food/food3.jpg';
import recipe4 from '../../images/food/food4.jpg';
import recipe5 from '../../images/food/food4.jpg';

const imageData = [
  {
    imageUrl: recipe,
    name: 'Choopy',
    description: 'Where Flavor Becomes Art!'
  },
  {
    imageUrl: recipe1,
    name: 'Choopy',
    description: 'Where Flavor Becomes Art!'
  },
  {
    imageUrl: recipe2,
    name: 'Choopy',
    description: 'Where Flavor Becomes Art!'
  },
  {
    imageUrl: recipe3,
    name: 'Choopy',
    description: 'Where Flavor Becomes Art!'
  },
  {
    imageUrl: recipe4,
    name: 'Choopy',
    description: 'Where Flavor Becomes Art!'
  },
  {
    imageUrl: recipe5,
    name: 'Choopy',
    description: 'Where Flavor Becomes Art!'
  }
];

function Slider() {
  const [slides, setSlides] = useState(imageData);

  const handleNext = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      const firstSlide = newSlides.shift();
      newSlides.push(firstSlide);
      return newSlides;
    });
  };

  const handlePrev = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      const lastSlide = newSlides.pop();
      newSlides.unshift(lastSlide);
      return newSlides;
    });
  };

  const handleImageClick = (index) => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      const clickedSlide = newSlides.splice(0, index);
      newSlides.push(...clickedSlide);
      return newSlides;
    });
  };

  return (
    <div className="slider-container">
      <div className="slide">
        {slides.map((data, index) => (
          <div key={index} className="item" style={{backgroundImage: `url(${data.imageUrl})`}} onClick={() => handleImageClick(index)}>
            <div className="content">
              <div className="name">{data.name}</div>
              <div className="des">{data.description}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default Slider;