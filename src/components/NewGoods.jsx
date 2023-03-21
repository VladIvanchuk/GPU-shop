import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { NewProduct } from "./";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

export const NewGoods = () => {
  const products = [0, 1, 2];

  return (
    <div className="new-goods">
      <h3>NEW SERIES!</h3>
      <div className="new-container">
        <Swiper
          spaceBetween={22}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            830: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product}>
              <Link className="new-goods-item new" to={`/details/${product}`}>
                <NewProduct />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
