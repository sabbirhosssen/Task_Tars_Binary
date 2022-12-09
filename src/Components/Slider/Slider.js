import React from 'react';

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
      <div>
        <div>
          <h1 className='text-center text-3xl text-bload'> Our Products</h1>
        </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
          <SwiperSlide>
            <img className='w-100% p-6' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-100% p-6' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt="" srcset="" />
          </SwiperSlide>
           
            
            ...
          </Swiper>
          
        </div>
    );
};

export default Slider;