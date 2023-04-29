import React from "react";
import "./Home.css";
import Dream from "../../Images/dream_img.png";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <section className="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="wrapper">
            <div className="home-left">
              <h1>POWERFUL HOSTING YOUR DREAM WEBSITE</h1>
              <div className="button">
                <Link className="btn home-btn">Get Started</Link>
                <Link className="btn home-btn">Contact Us</Link>
              </div>
            </div>
            <div className="home-right">
              <img src={Dream} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="home-left">
              <h1>POWERFUL HOSTING YOUR DREAM WEBSITE</h1>
              <div className="button">
                <Link className="btn home-btn">Get Started</Link>
                <Link className="btn home-btn">Contact Us</Link>
              </div>
            </div>
            <div className="home-right">
              <img src={Dream} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="home-left">
              <h1>POWERFUL HOSTING YOUR DREAM WEBSITE</h1>
              <div className="button">
                <Link className="btn home-btn">Get Started</Link>
                <Link className="btn home-btn">Contact Us</Link>
              </div>
            </div>
            <div className="home-right">
              <img src={Dream} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <div className="home-left">
              <h1>POWERFUL HOSTING YOUR DREAM WEBSITE</h1>
              <div className="button">
                <Link className="btn home-btn">Get Started</Link>
                <Link className="btn home-btn">Contact Us</Link>
              </div>
            </div>
            <div className="home-right">
              <img src={Dream} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    
  
  );
};

export default Home;
