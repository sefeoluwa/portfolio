/* eslint-disable react/no-unescaped-entities */
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



const GetInTouch = () => {

  useEffect (() => {
    AOS.init({duration: 1500});
}, []);

  return (
    <section id="contact" className="md:h-[60vh] h-[60vh] flex flex-wrap justify-start md:justify-around p-4 md:p-14 mt-20 md:mt-14">
      <div className=""
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      >
        <h2 className="flex w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Let's work together</h2>
        <p className="flex justify-start  mt-8 text-[20px] max-w-[496px] leading-[30px] text-[#808080]">Want to discuss an opportunity to create something great? I’m ready when you are!</p>
      </div>
      
      <Link
       data-aos="fade-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="1500"
      to="/contact" className="main-button py-[16px] px-[32px] flex items-center justify-center h-[55px] rounded-[9px]  gap-[8px] font-semibold text-white"><FaRocket /> <button >Get in touch</button></Link>
      </section>
  )
}

export default GetInTouch