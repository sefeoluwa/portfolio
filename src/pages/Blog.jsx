import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

    return (
      <div className='flex flex-col gap-5 py-[150px] justify-center items-center'>
      <div className="px-10">
        <h1 className='font-black lg:text-[50px] sm:text-[60px] text-[30px] lg:leading-[70px] mt-7 '>Welcome to my Legal Insights Blog!</h1>
      </div>
      <div className="bg-[#808080] h-[1px] w-full"></div>
       
       <div className="text-[18px] max-w-[700px] px-10 lg:px-0 flex flex-col justify-center w-full gap-14">
       <p>From structuring startups to navigating regulations and high-stakes deals, I share insights that matter. Whether you're a founder, investor, or just curious about the legal side of innovation, you’re in the right place.</p>
        <div className="">
          <p className='font-bold '>Disclaimer</p>
          <p>The content of this blog is for informational purposes only and does not constitute legal advice. The views expressed are based on my personal research and opinions. If you require legal assistance, please consult a qualified legal professional.</p>
        </div>
      <div>
        <p className='font-bold'>Explore my articles</p>
          <p>Check out the latest discussions and analyses below:
          </p>
      </div>
       </div>
      </div>
      
    );
  }
  
  export default Blog;
  