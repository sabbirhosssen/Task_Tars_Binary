import React from 'react';


// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import product

import product_1 from "./../Images/p-1.jpeg";
import product_10 from "./../Images/p-10.jpeg";
import product_2 from "./../Images/p-2.jpeg";
import product_3 from "./../Images/p-3.jpeg";
import product_4 from "./../Images/p-4.jpeg";
import product_5 from "./../Images/p-5.jpeg";
import product_6 from "./../Images/p-6.jpeg";
import product_7 from "./../Images/p-7.jpeg";
import product_8 from "./../Images/p-8.jpeg";
import product_9 from "./../Images/p-9.jpeg";

const Products = () => {
   const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
    return (
        <div className='bg-gray-400'>
            <div>
          <h1 className='text-center text-3xl text-bload'> Our Products</h1>
        </div>
        <Swiper
           pagination={pagination}
        
        
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            // navigation
            //pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
          <SwiperSlide>
            <img className='w-100% p-6 border-4 rounded-2xl bg-gray-100' src={ product_1} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100 h-1/4 p-6' src={ product_2} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_3} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_4} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_5} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_6} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_7} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_8} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_9} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src={ product_10} alt=""  />
          </SwiperSlide>
         
           
            
            ...
          </Swiper>
        </div>
    );
};

export default Products;