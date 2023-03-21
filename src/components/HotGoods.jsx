import { HotProduct } from "./";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

export const HotGoods = () => {
  const products = [0, 1, 2, 3, 4, 5];

  return (
    <div className="hot-goods">
      <h3>Hot Products</h3>
      <div className="hot-goods-container">
        <Swiper
          spaceBetween={22}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            1400: {
              slidesPerView: 4,
            },
            1060: {
              slidesPerView: 3,
            },
            700: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product}>
              <Link className="hot-goods-item" to={`/details/${product}`}>
                <HotProduct />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
