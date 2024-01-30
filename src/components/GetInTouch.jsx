/* eslint-disable react/no-unescaped-entities */
import { FaRocket } from "react-icons/fa";


const GetInTouch = () => {
  return (
    <div>
      <div className="">
        <h2>Let's work together</h2>
        <p>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
      </div>
      <div className="">
      <button className="resume bg-slate-500 py-[16px] px-[32px] flex items-center justify-center h-[55px] w-[200px] rounded-[9px] text-[18px] gap-[8px] font-semibold text-white"><FaRocket /> Get in touch</button>
      </div>
    </div>
  )
}

export default GetInTouch