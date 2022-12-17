import React from 'react';

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import slide image
// import bannar_1 from "./../../../Images/Bannar_family2.jpg";
import bannar_1 from "./../../../Images/bannar-1.jpeg";
import bannar_2 from "./../../../Images/Bannar_panth1.jpg";

const Slider = () => {
    return (
      <div>
       
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className=" w-full h-screen m-0 p-0"
          >
          <SwiperSlide>
            <div className="image relative" id="fhj">
              <img className='w-screen ' src={bannar_1} alt="" />
              <div className='title-content'>
                <h2>hello </h2>

              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-screen ' src={bannar_2} alt="" />
           
          </SwiperSlide>
          <SwiperSlide>
            
            <img className='w-screen ' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt=""  />
          </SwiperSlide>
         
           
            
            ...
          </Swiper>
          
        </div>
    );
};

export default Slider;