import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    // let headingAnimation;
    // useGSAP(
    //     headingAnimation = () => {
    //         gsap.from(".main-heading-txt", {
    //             y: "60vh",
    //             duration: 1,
    //             delay: 0.2,
    //             stagger: 0.1,
    //             ease: "power1.out",
    //         })
    //         gsap.from(".shoeImg", {
    //             y: "80vh",
    //             duration: 1.2,
    //             delay: 0.5,
    //             ease: "power1.out",
    //         })
    //     }
    // )
    // useEffect(() => {
    //     headingAnimation();
    // }, [])

    return (
        <header className='hero-section relative h-fit lg:h-screen max-h-[768px] w-full pt-[20vh] lg:py-[10vh] flex lg:flex-col flex-col-reverse gap-10 items-center justify-center lg:justify-between'>
            <div className=" w-full relative z-[10] px-5 flex lg:flex-row flex-row-reverse justify-between bg-[#fff]">
                <NavLink to="/shoes/sale"><span className="inline-block w-[5px] h-[5px] rounded-full bg-[#34ff22] shadow-[0px_0px_10px_1px_#20f70c] mb-1"></span> On sale</NavLink>
                <p className='w-[25ch]'>Discover branded footwear to kickstart your wardrobe, one step at a time —</p>
            </div>
            <div className="main-heading flex-shrink-0 w-full">
                <h1 className='w-full bg-[#fff] mix-blend-lighten flex justify-center text-[6.8rem] lg:text-[22rem] leading-none tracking-[-5px] lg:tracking-[-10px]'>
                    {
                        "Kickster".split("").map((item, index) => (
                            <span key={item} className={`${index === 0 && "uppercase"} main-heading-txt`}>{item}</span>
                        ))
                    }
                </h1>
            </div>
            <img className='shoeImg absolute bottom-[8vh] lg:bottom-[3vh] left-[50%] -translate-x-[50%] h-[30vh] lg:h-[95vh] max-h-[800px] z-10' src="../../../../assets/images/shoeNobgL.png" alt="Nike Shoe Img"/>
        </header>
    )
}

export default Hero