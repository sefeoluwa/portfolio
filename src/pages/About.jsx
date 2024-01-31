/* eslint-disable react/no-unescaped-entities */
import { Logo } from '../assets';

const About = () => {
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
          <p>As a Front End Developer, I specialize in crafting high-quality web interfaces using cutting-edge technologies. I believe in the power of code to transform ideas into visually stunning and functional websites. My work is centered around user-centric design, ensuring that every project delivers an outstanding digital experience.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>WHAT I DID</h2>
          <p>During my time as a Growth Marketing Associate at PersonaRise, I delved into content management, honed my skills in Search Engine Optimization (SEO), built backlinks for our blog, curated engaging email marketing campaigns, and crafted compelling social media content for Twitter.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>EDUCATION</h2>
          <p>I embarked on a comprehensive FullStack JavaScript journey with The Odin Project. This immersive course equipped me with the proficiency in Front-end technologies, and I continue to explore Back-end development, mastering key technologies such as HTML, CSS, JavaScript, Node.js, and React.js.</p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className='font-bold'>SKILLS</h2>
          <p>My toolkit includes a variety of skills such as JavaScript (ReactJS, NextJS, TypeScript, ES6, EsLint, Context API), ThreeJS for 3D animations, GitHub collaboration, CSS expertise (CSS3, TailwindCSS), Figma for design, and an agile mindset that fosters effective teamwork and communication.</p>
        </div>
      </div>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>Feel free to reach out via e-mail or follow me on Twitter. Dive into my professional journey through my Resume, or connect with me on LinkedIn.</p>

      <p className='max-w-[700px] px-10 lg:px-0 text-[18px]'>Let's collaborate and build something great together,</p>

      <Logo />
    </div>
  );
};

export default About;
