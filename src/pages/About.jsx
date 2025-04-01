/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { Logo } from '../assets';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className='flex flex-col gap-10 py-[150px] justify-center items-center'>
      <div className="px-10">
        <h1 className='font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7 '>A Little Bit About Me</h1>
        <p className='text-[#808080]'>Who I am and what I do.</p>
      </div>
      
      <div className="bg-[#808080] h-[1px] w-full"></div>
      
      <div className="text-[18px] max-w-[700px] px-10 lg:px-0 flex flex-col justify-center w-full gap-14">
        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHO I AM</h2>
          <p>Hey there, I'm <span className='font-bold'>Sefeoluwa Akinbeye</span>, a law graduate with a deep interest in corporate law and technology law. My background uniquely blends law, technology, and business, allowing me to approach legal challenges with a problem-solving mindset and an eye for innovation.</p>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DO</h2>
          <p>I focus on corporate transactions, regulatory compliance, and advisory services at the intersection of law and technology. My experience spans telecommunications law, corporate structuring, and regulatory analysis, helping businesses navigate complex legal landscapes.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I'VE DONE</h2>
          <p>Before transitioning fully into law, I worked as a Front-End Developer and Growth Marketing Associate. These roles sharpened my analytical thinking, research skills, and ability to communicate complex ideas effectively—skills I now apply in corporate legal advisory.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I'M EXPLORING</h2>
          <p>I'm passionate about corporate transactions, startup advisory, and private equity. Whether it’s mergers & acquisitions, regulatory compliance, or deal structuring, I enjoy diving into the nuances of business law and strategy. I'll also be sharing insights on startup advisory, venture capital, and private equity—check out my blog for more..</p>
        </div>
      </div>
      
      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>
        Let's connect! Reach out via <span> </span>
        <a href="mailto:sefeoluwaakinbeye@gmail.com" className='font-bold underline underline-offset-4'>
          email  
        </a>  
        , explore my <span> </span>
        <a href="https://flowcv.com/resume/ok647of1rh" target="_blank" rel="noreferrer" className='font-bold underline underline-offset-4'>
          Resume
        </a>
        , or connect with me on <span> </span>
        <a href="https://www.linkedin.com/in/sefeakinbeye/" target="_blank" rel="noreferrer" className='font-bold underline underline-offset-4'>
          LinkedIn
        </a>
        .
      </p>

      <Logo />
      
      <Link to="/contact" className="touch-btn flex items-center h-[50px] md:w-[30%] w-[60vw] justify-center bg-[#181818] rounded-[1.87rem] text-[18px]">
        <button className="flex items-center font-semibold">Get in touch</button>
      </Link>
    </div>
  );
};

export default About;
