/* eslint-disable react/no-unescaped-entities */
import { FaRocket } from "react-icons/fa";


const GetInTouch = () => {
  return (
    <div className="h-[60vh] flex flex-wrap justify-between p-14 mt-14">
      <div className="">
        <h2 className="flex w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[16px] lg:leading-[40px]">Let's work together</h2>
        <p className="flex justify-start  mt-8 text-[20px] max-w-3xl leading-[30px] text-[#808080]">Want to discuss an opportunity to create something great? I’m ready when you are!</p>
      </div>
      
      <button className="main-button py-[16px] px-[32px] flex items-center justify-center h-[55px] rounded-[9px]  gap-[8px] font-semibold text-white"><FaRocket /> Get in touch</button>
      </div>
  )
}

export default GetInTouch