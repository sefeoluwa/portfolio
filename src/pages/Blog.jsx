import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { useEffect } from 'react';

const Blog = () => {
    return (
      <div className='flex flex-col gap-10 py-[150px] justify-center items-center'>
      <div className="px-10">
        <h1 className='font-black lg:text-[50px] sm:text-[60px] text-[30px] lg:leading-[70px] mt-7 '>Welcome to my Legal Insights Blog!</h1>
      </div>
      <div className="bg-[#808080] h-[1px] w-full"></div>
       
       <div className="">
       <p>The world of business and technology is evolving rapidly, and with it, the legal landscape that governs startups, investments, and innovation. This blog is dedicated to unpacking the complexities of startup advisory, private equity, mergers & acquisitions, telecommunications law, and technology law—helping entrepreneurs, investors, and legal professionals navigate these critical areas.</p>
        <p>Here, you’ll find insights on structuring startups, navigating regulatory challenges, understanding investment strategies, and exploring the intersection of law and emerging technologies. Whether you’re a founder, an investor, or just passionate about the legal aspects of tech and business, there’s something valuable for you.</p>
        <div className="">
          <p>Disclaimer</p>
          <p>The content of this blog is for informational purposes only and does not constitute legal advice. The views expressed are based on my personal research and opinions. If you require legal assistance, please consult a qualified legal professional.</p>
        </div>
      <div className="">
        <p>Explore the Articles
          <span>Check out the latest discussions and analyses below:
          </span>
          </p>
      </div>
       </div>
      </div>
      
    );
  }
  
  export default Blog;
  