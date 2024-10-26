import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

//icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCards = ({heading, cards}) => {

    const screenX = screen.width;
    
    return (
        <>
            <h2 className="text-[1.6rem] font-medium text-zinc-900 mb-[5vh] border-b-[2px] border-zinc-700 w-fit leading-none capitalize">{heading}</h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={`${screenX < 640 ? "1" : "3.5"}`}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop
                grabCursor={true}
            >
                {
                    cards.map(item => (
                        <SwiperSlide key={item.id} className="new-arrival-card w-[340px] h-[480px]">
                            <Link to={`/product/${item.id}`} className="w-full h-full">
                                <div className="new-arrival-img-container h-[390px] w-full overflow-hidden">
                                    <img className="new-arrival-img object-cover rounded-md h-full w-full" src={item.images[0]} alt={`${item.title} image`} />
                                </div>
                                <span className="block mt-3 text-[1.1rem] font-semibold text-zinc-800">{item.title}</span>
                                <span className="block text-[0.95rem] font-medium text-zinc-500">{item.category}</span>
                                <span className="block text-[1.1rem] font-semibold text-zinc-800">{`${item.price} ₹`}</span>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="navigations px-14 flex gap-5 absolute bottom-[-5vh] lg:bottom-[50%] lg:-translate-y-[50%] lg:w-full lg:justify-between left-[50%] -translate-x-[50%] z-10">
                <span className="prev-btn w-[50px] h-[50px] flex justify-center items-center bg-zinc-300 rounded text-zinc-700"><FaArrowLeftLong /></span>
                <span className="next-btn w-[50px] h-[50px] flex justify-center items-center bg-zinc-300 rounded text-zinc-700"><FaArrowRightLong /></span>
            </div>
        </>
    )
}

export default ProductCards