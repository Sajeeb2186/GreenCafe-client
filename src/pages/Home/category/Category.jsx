
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import { FreeMode, Pagination } from 'swiper/modules';




import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';



export default function Category() {
  return (
    
   <section>
    <SectionTitle 

    subHeading={"From 10:00 AM to 11.00 PM"}
    heading={"Order Online"}

    
    ></SectionTitle>
     <Swiper
    slidesPerView={3}
    spaceBetween={30}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper mb-24"
  >
    <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 mr-28 text-white'>Salads</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 mr-28 text-white'>Soups</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 mr-28 text-white'>Pizzas</h3>

    </SwiperSlide>
    <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 mr-28 text-white'>Desserts</h3>

    </SwiperSlide>
    <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 mr-28 text-white'>Soups</h3>

    </SwiperSlide>
    
  </Swiper>
   </section>
  )
}
