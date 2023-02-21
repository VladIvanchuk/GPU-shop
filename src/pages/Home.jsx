import mainIimg from "../theme/img/main.png";
import explImg from "../theme/img/ExploreMore_Image.png";
import { HotProduct, ButtonLink } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { NewProduct } from "../components/NewProduct";

export const Home = () => {
  return (
    <div className="wrapper home">
      <div className="main">
        <div className="text">
          <h1>
            Feel the <span>power</span>
          </h1>
          <h2>
            <span>GPU</span> EXPERIENCE
          </h2>
          <ButtonLink link="/products" text={"Lets shop!"} />
        </div>
        <img src={mainIimg} alt="" />
      </div>
      <div className="new-goods">
        <h3>NEW SERIES!</h3>
        <div className="new-container">
          <NewProduct />
          <NewProduct />
          <NewProduct />
        </div>
      </div>
      <div className="explore">
        <div className="text">
          <h2>
            EXPLORE MORE <span>AMAZING</span>
          </h2>
          <h2>
            <i>VGA</i> PRODUCTS
          </h2>
          <p>
            Shop all video cards and search like a pro with advanced comparison and filter
            options.
          </p>
          <ButtonLink link="/products" text={"Shop now!"} />
        </div>
        <div className="img">
          <img src={explImg} alt="" />
        </div>
      </div>
      <div className="hot-goods">
        <h3>Hot Products</h3>
        <div className="hot-goods-container">
          <Swiper
            spaceBetween={22}
            slidesPerView={4}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <HotProduct />
            </SwiperSlide>
            <SwiperSlide>
              <HotProduct />
            </SwiperSlide>
            <SwiperSlide>
              <HotProduct />
            </SwiperSlide>
            <SwiperSlide>
              <HotProduct />
            </SwiperSlide>
            <SwiperSlide>
              <HotProduct />
            </SwiperSlide>
            <SwiperSlide>
              <HotProduct />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
