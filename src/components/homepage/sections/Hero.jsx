import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import shoe from '../../../../assets/images/shoeNobgL-min.png';
import menShoe from '../../../../assets/images/men_shoe.jpg';
import womenShoe from '../../../../assets/images/women_shoe.jpg';
import circle from '../../../../assets/images/circle_3d.png';

const Hero = () => {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.from(".main-heading-txt", {
            y: "60vh",
            duration: 1.2,
            delay: 0.2,
            stagger: 0.1,
            ease: "power1.out",
        })
        gsap.from(".shoe-img", {
            opacity: 100,
            duration: 1,
            ease: "power1.out",
        })
    })

    let screen;
    useEffect(() => {
        screen = window.innerWidth;
    })

    return (
        // <header className='hero-section relative h-fit xl:h-screen max-h-[768px] w-full xl:px-5 xl:py-[5vh] flex xl:flex-col flex-col-reverse gap-10 items-center justify-center xl:justify-between'>
        <header className='hero-section relative h-fit xl:h-screen w-full px-3 py-5 xl:py-[5vh]'>
            {/* <div className="w-full relative z-[10] flex xl:flex-row flex-row-reverse justify-between bg-[#fff]">
                <NavLink className="font-normal" to="/shoes/sale"><span className="inline-block w-[5px] h-[5px] rounded-full bg-[#34ff22] shadow-[0px_0px_10px_1px_#20f70c] mb-1"></span> On sale</NavLink>
                <p className='w-[25ch] font-normal'>Discover branded footwear to kickstart your wardrobe, one step at a time —</p>
            </div>
            <div className="heading-container w-full h-fit xl:overflow-hidden pb-[1.5vh]">
                <div className="main-heading flex-shrink-0 w-full">
                    <h1 className='w-full h-fit bg-[#fff] mix-blend-lighten flex flex-wrap justify-center text-[6.8rem] xl:text-[22rem] 2xl:text-[25rem] leading-none tracking-[-5px] xl:tracking-[-10px]'>
                        {
                            screen = 1024 ?
                            "Kickster".split("").map((item, index) => (
                                <span key={item} className={`${index === 0 && "uppercase"} main-heading-txt`}>{item}</span>
                            )) :
                            <span className='block'>KICK<br />STER</span>
                        }
                    </h1>
                </div>
                <img className='shoeImg absolute bottom-[9vh] xl:bottom-[3vh] left-[50%] -translate-x-[50%] h-[30vh] xl:h-[95vh] max-h-[750px] z-10' src={shoe} alt="Nike Shoe Img" />
            </div> */}
            <div className="w-full h-fit xl:h-[calc(100vh-90px)] flex flex-col xl:flex-row gap-3">
                <div className="left-hero hero-gradient w-full xl:w-[78%] h-[500px] md:h-[700px] xl:h-full flex justify-center items-center overflow-hidden rounded-xl relative">
                    <h1 className='heading-txt text-[7.5rem] md:text-[28vw] lg:text-[20vw] xl:text-[14vw] 2xl:text-[13.5vw] text-center text-white tracking-tight leading-none w-[4.1ch] xl:w-fit break-words font-semibold relative z-[1]'>KICKSTER</h1>
                    <h1 className='upper-hero-txt text-[7.5rem] md:text-[28vw] lg:text-[20vw] xl:text-[14vw] 2xl:text-[13.5vw] text-center tracking-tight leading-none w-[4.1ch] xl:w-fit break-words'>KICKSTER</h1>
                    <div className="shoe-img">
                        <img src={shoe} className='shoe-img absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[300px] md:h-[70vw] lg:h-[55vw] xl:h-[37vw] object-cover z-[2]' alt="" />
                    </div>
                    <div className="overlay-circle absolute top-0 left-0 h-full w-full">
                        <img className='h-[4rem] md:h-[7rem] 2xl:h-[9rem] absolute top-[-2vw] left-[-1vw] object-cover opacity-80' src={circle} alt="" />
                        <img className='h-[2rem] md:invisible absolute top-[15%] right-[10%] object-cover opacity-80 z-0' src={circle} alt="" />
                        <img className='h-[2.5rem] md:visible md:h-[3.5rem] 2xl:h-[6rem] invisible absolute top-[20%] right-[30%] object-cover opacity-80 z-0' src={circle} alt="" />
                        <img className='h-[6.5rem] md:h-[10rem] 2xl:h-[14rem] absolute top-[30%] left-[10%] object-cover opacity-80 z-0' src={circle} alt="" />
                        <img className='h-[2.8rem] md:h-[5.5rem] 2xl:h-[7.5rem] absolute bottom-[20%] right-[10%] object-cover opacity-80 z-0' src={circle} alt="" />
                        <img className='h-[4rem] invisible md:visible md:h-[7.5rem] 2xl:h-[10rem] absolute bottom-[-2vw] left-[15%] object-cover opacity-80 z-0' src={circle} alt="" />
                    </div>
                    <Link to="/shop" className='absolute bg-white px-5 2xl:px-7 py-1.5 2xl:py-2.5 rounded bottom-[3vmax] shadow-xl shadow-zinc-300 text-black txt-medium 2xl:text-[1.2rem]'>Shop Now ›</Link>
                </div>
                <div className="right-hero w-full xl:w-[22%] h-[150px] md:h-[250px] xl:h-full flex xl:flex-col gap-3">
                    <div className="men-link w-1/2 xl:w-full h-full xl:h-1/2 relative rounded-md overflow-hidden">
                        <Link to="/shop/men" className="w-full xl:w-full flex justify-center items-center h-[150px] xl:h-full">
                            <img className=' w-full xl:h-full object-cover object-bottom' src={menShoe} alt="" />
                            <div className="overlay absolute top-0 left-0 h-full w-full bg-[#00000021] flex justify-center items-center">
                                <h2 className='txt-medium text-white 2xl:text-[1.2rem]'>Men</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="women-link w-1/2 xl:w-full h-full xl:h-1/2 relative rounded-md overflow-hidden">
                        <Link to="/shop/women" className="w-full h-full flex justify-center items-center xl:h-full">
                            <img className='w-full xl:h-full object-cover object-bottom' src={womenShoe} alt="" />
                            <div className="overlay absolute top-0 left-0 h-full w-full bg-[#00000031] flex justify-center items-center">
                                <h2 className='txt-medium text-white 2xl:text-[1.2rem]'>Women</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero