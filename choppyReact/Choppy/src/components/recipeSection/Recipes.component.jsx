import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./recipes.styles.css";

import slide_food from "../../images/food/food.jpg";
import slide_food_1 from "../../images/food/food1.jpg";
import slide_food_2 from "../../images/food/food2.jpg";
import slide_food_3 from "../../images/food/food3.jpg";
import slide_food_4 from "../../images/food/food4.jpg";
import slide_food_5 from "../../images/food/food5.jpg";
import slide_food_6 from "../../images/food/food6.jpg";
import slide_food_9 from "../../images/food/food9.jpg";

function Recipes() {
  return (
    <div className="swiper-container">
      <div className="heading-container">
        <h1 className="heading">Explore More</h1>
        <button className="view-more">View More</button>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food} alt="slide_image" />
            <div className="label">5 Ingredients</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food_1} alt="slide_food" />
            <div className="label">Copycat Recipe</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food_2} alt="slide_food" />
            <div className="label">Breakfast Brunch & Dinner</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food_3} alt="slide_food" />
            <div className="label">Healthy</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food_4} alt="slide_food" />
            <div className="label">Quick & Easy</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food_5} alt="slide_food" />
            <div className="label">International Eats</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/recipe">
            <img src={slide_food_6} alt="slide_food" />
            <div className="label">Drinks</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/chicken-recipes">
            <img src={slide_food_9} alt="slide_food" />
            <div className="label">Chicken</div>
            </a>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Recipes;
