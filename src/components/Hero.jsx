import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, zoomIn, textVariant, staggerContainer } from '../utils/motion';
import { hero_img_dark, hero_img_light } from "../assets";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="h-[80vh] pt-24 lg:pt-10 flex justify-center items-start"
    >
      <div className="">
      <div className="flex items-center flex-col justify-start gap-14 max-w-[1008px] h-[345px]">
        <motion.h1
          variants={textVariant(0)}
          initial="hidden"
          animate="show"
          className="font-black lg:text-[80px] sm:text-[60px] xs:text-[48px] text-[38px] lg:leading-[98px] mt-2 z-10"
        >
          <span className="text-[#808080]">I'm</span> Sefe Akinbeye
        </motion.h1>
        <motion.p
          variants={fadeIn("down", "tween", 0.5, 1)}
          initial="hidden"
          animate="show"
          className="text-[15px] md:text-[25px] font-semibold w-[358px] md:w-[729px] text-[#808080] px-2"
        >
          A skilled frontend developer who has worked with ReactJS, JavaScript,
          CSS3, and HTML5. If you're in search of someone to build pixel-perfect
          pages from Figma Designs, I'm the one for you. Let's collaborate to
          create something extraordinary that will make a lasting impact!
        </motion.p>
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate="show"
          className="flex gap-[16px] flex-wrap justify-center md:justify-normal"
        >
          <motion.a
            href="https://flowcv.com/resume/ok647of1rh"
            target="_blank"
            rel="noreferrer"
            variants={zoomIn(0.7, 1)}
          >
            <motion.button className="main-button flex items-center justify-center font-semibold text-white">
              See my resume
            </motion.button>
          </motion.a>
          <motion.div
            variants={zoomIn(0.9, 1)}
            className="touch-btn flex items-center h-[60px] md:h-auto px-[40px] bg-[#181818] rounded-[1.87rem] text-[18px]"
          >
            <Link to="/contact" className="flex items-center font-semibold">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="">
        <img src={hero_img_dark} alt="" className="hero_img_dark" />
        <img src={hero_img_light} alt="" className="hero_img_light" />
      </div>
      </div>
    </motion.section>
  );
};

export default Hero;
