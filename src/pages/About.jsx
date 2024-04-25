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
        <h1 className='font-black lg:text-[80px] sm:text-[60px] text-[38px] lg:leading-[98px] mt-7 '>A little bit about ME</h1>
        <p className='text-[#808080]'>Who I am and what i do.</p>
      </div>

      <div className="bg-[#808080] h-[1px] w-full"></div>

      <div className="text-[18px] max-w-[700px] px-10 lg:px-0 flex flex-col justify-center w-full gap-14">
        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHO I AM</h2>
          <p>Hey there, I'm <span className='font-bold'>Sefeoluwa</span>, a passionate self-taught front-end developer based in Nigeria. My journey into the world of web development has been a thrilling adventure filled with curiosity and a drive to create beautiful, interactive, and user-friendly digital experiences.</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DO</h2>
          <p>As a Front End Developer, I specialize in crafting high-quality web interfaces using cutting-edge technologies. My current role at Talent Sphere Africa allows me to apply my skills and expertise in frontend development to create exceptional user experiences. Here's a glimpse into what I do:</p>
          <ul className="list-none pl-5 flex flex-col gap-4">
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Collaborate with a team of developers to design, develop, and deploy responsive web applications using Next.js and TypeScript.</li>
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Participate in daily stand-up meetings to discuss project progress, identify challenges, and plan tasks for the day.</li>
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Implement new features and enhancements to existing web applications, focusing on optimizing user experience and performance.</li>
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Conduct code reviews and provide constructive feedback to maintain code quality and consistency within the team.</li>
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Resolve bugs and issues reported by QA testers to ensure the stability and functionality of the applications.</li>
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Contribute to the development of reusable UI components and libraries to streamline the frontend development process.</li>
            <li className='flex items-center gap-5'> <span className='text-[28px]'>⇝</span> Demonstrate strong problem-solving skills and attention to detail in identifying and resolving technical issues efficiently.</li>
          </ul>
        </div>


        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DID</h2>
          <p>During my time as a Growth Marketing Associate at PersonaRise, I delved into content management. I honed my skills in Search Engine Optimization (SEO), built backlinks for our blog, curated engaging email marketing campaigns, and crafted compelling social media content for Twitter.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>EDUCATION</h2>
          <p>I embarked on a comprehensive FullStack JavaScript journey with The Odin Project. This immersive course equipped me with the proficiency in Front-end technologies, and I continue to explore Back-end development, mastering key technologies such as HTML5, CSS3, JavaScript, Node.js, React.js, NextJS, GraphQL, and Firebase.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>SKILLS</h2>
          <p>My toolkit includes a variety of skills such as JavaScript (ReactJS, NextJS, TypeScript, ES6, EsLint, Context API), ThreeJS for 3D animations, GitHub collaboration, CSS expertise (CSS3, TailwindCSS), Figma for design, and an agile mindset that fosters effective teamwork and communication.</p>
        </div>
      </div>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>
        Feel free to reach out to me via <span> </span>
        <a href="mailto:sefeoluwaakinbeye@gmail.com" className='font-bold underline underline-offset-4'>
          email  
          </a>  
        .<span> </span>Dive into my professional journey through my  <span> </span>
        <a  href="https://flowcv.com/resume/ok647of1rh" target="blank" rel="noreferrer" className='font-bold underline underline-offset-4'>
          Resume
        </a>
        ,  <span> </span>or connect with me on  <span> </span>
        <a href="https://www.linkedin.com/in/sefeakinbeye/" target="_blank" rel="noreferrer" className='font-bold underline underline-offset-4'>
        LinkedIn
        </a>
        . <span> </span>
      </p>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>Let's collaborate and build something great together,</p>

      <Logo />

      <Link to="/contact" className="touch-btn flex items-center h-[50px] md:w-[30%] w-[60vw] justify-center bg-[#181818] rounded-[1.87rem] text-[18px]">
          <button className=" flex items-center font-semibold">Get in touch</button>
          </Link>
    </div>
  );
};

export default About;
