/* eslint-disable react/no-unescaped-entities */


const Hero = () => {

  return (
    <div className="h-[90vh] pt-10 flex justify-center items-start ">
      <div className="flex items-center flex-col  justify-center gap-[40px] w-[1008px] h-[345px]">
        <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 z-10 ">
          <span className="text-[#808080]">I'm</span> Sefe Akinbeye
        </h1>
        <p className="text-[25px] font-semibold w-[729px] "> I'm a skilled frontend developer who has worked with ReactJS, JavaScript, CSS3, and HTML5. If you're in search of someone to build pixel perfect  pages from Figma Designs, I'm the one for you. Let's collaborate to create something extraordinary that will make a lasting impact!  </p>
        <div className="flex gap-[16px] flex-wrap">
          <button className="main-button  flex items-center justify-center font-semibold text-white">See my resume</button>
          <button className="touch-btn flex h-[55px] py-[16px] px-[40px] bg-[#181818] rounded-[1.87rem] text-[18px]">Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
