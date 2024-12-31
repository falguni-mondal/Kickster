"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);
function SmoothScrolling({ children }) {
  const { data } = useSelector((state) => state.products);
  const lenis = useRef(null);
  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smooth: true,
    });
    function raf(time){
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return ()=> lenis.current.destroy();
  },[data])

  useEffect(()=>{
    const onScroll = ()=>{
      ScrollTrigger.update();
    };
    lenis.current.on('scroll', onScroll);
    return ()=> lenis.current.off('scroll', onScroll);
  },[data]);
  // lenis options for configuration
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
