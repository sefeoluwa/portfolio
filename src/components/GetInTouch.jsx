/* eslint-disable react/no-unescaped-entities */
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";


const GetInTouch = () => {
  return (
    <section id="contact" className="md:h-[60vh] h-[60vh] flex flex-wrap justify-start md:justify-around p-4 md:p-14 mt-20 md:mt-14">
      <div className="">
        <h2 className="flex w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]">Let's work together</h2>
        <p className="flex justify-start  mt-8 text-[20px] max-w-[496px] leading-[30px] text-[#808080]">Want to discuss an opportunity to create something great? I’m ready when you are!</p>
      </div>
      
<<<<<<< HEAD
      <Link to="/contact" className="main-button py-[16px] px-[32px] flex items-center justify-center h-[55px] rounded-[9px]  gap-[8px] font-semibold text-white"><FaRocket /> <button >Get in touch</button></Link>
=======
      <button className="main-button py-[16px] px-[32px] flex items-center justify-center h-[55px] rounded-[9px]  gap-[8px] font-semibold text-white"><FaRocket /> <Link to="/contact">Get in touch</Link></button>
>>>>>>> 9101acca36c491fcf8b71a4025e5c25352aa536d
      </section>
  )
}

export default GetInTouch