import React, { useState } from 'react'
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
import { priceCorrection, priceStringToInt } from './priceCorrection';
import Loader from '../loader/Loader';

const ProductCards = ({ heading, cards }) => {
    const [screenX, setScreenX] = useState(window.innerWidth);
    window.onresize = () => {
        setScreenX(window.innerWidth);
    };

    return (
        <>
            <h2 className="text-[1.6rem] txt-medium text-zinc-800 mb-[3vh] xl:mb-[5vh] w-fit leading-none capitalize">{heading}</h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={`${screenX < 768 ? "10" : screenX < 1280 ? "10" : "30"}`}
                slidesPerView={`${screenX < 768 ? "1.3" : screenX < 1024 ? "2.3" : "3.4"}`}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop
                grabCursor={true}
            >
                {
                    cards ?
                        cards.map(item => (
                            <SwiperSlide key={item.id} className={`new-arrival-card w-[340px] md:w-[45%] lg:w-[32%] xl:w-[28%]`}>
                                <Link to={`/product/${item.id}`} className="w-full h-full">
                                    <div className={`new-arrival-img-container h-[300px] md:h-[32vmax] lg:h-[30vmax] xl:h-[28vmax] 2xl:h-[30vmax] w-full overflow-hidden`}>
                                        <img className="new-arrival-img object-cover rounded-md h-full w-full" src={item.images[0]} alt={`${item.title} image`} />
                                    </div>
                                    <span className="block mt-3 text-[1.1rem] txt-medium text-zinc-800 whitespace-nowrap">{item.title}</span>
                                    <span className="block txt-medium text-[#6d6d79]">{item.gender === "men" ? "Men's Shoes" : item.gender === "women" ? "Women's Shoes" : "Unisex Shoes"}</span>
                                    <p className="product-price mt-3 text-[1.1rem] txt-medium flex gap-[1ch] items-center">{`₹ ${priceCorrection(Math.round(priceStringToInt(item.price) - (priceStringToInt(item.price) * item.discount) / 100))}.00`}</p>
                                </Link>
                            </SwiperSlide>
                        ))
                        :
                        <Loader />
                }
            </Swiper>
            <div className="navigations px-8 flex justify-center gap-5 mt-3 lg:mt-5 2xl:mt-7">
                <span className="prev-btn w-[50px] h-[50px] flex justify-center items-center bg-zinc-300 rounded text-zinc-700"><FaArrowLeftLong /></span>
                <span className="next-btn w-[50px] h-[50px] flex justify-center items-center bg-zinc-300 rounded text-zinc-700"><FaArrowRightLong /></span>
            </div>
        </>
    )
}

export default ProductCards