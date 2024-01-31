import { useState } from "react";
import { Logo, menu, close } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { sideVariants, itemVariants } from '../utils/motion.js'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // animate sidebar render on mobiles


  return (
    <>
       {/* Desktop Navbar */}
       <nav className="nav-full sticky top-0 flex md:flex justify-between pt-5 z-10 h-5">
        <div className="nav-container flex justify-between w-[65%] mx-auto">
          <div className="">
          <Logo />
          </div>

          <ul className="flex justify-around w-[9cm] pt-2 text-[15px] items-center h-12">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>More</li>
          </ul>
        <div className="w-[100px] h-[50px] p-4 flex justify-between items-center ">
        <FaGithub style={{ fontSize: '25px' }}/>
        <FaLinkedin style={{ fontSize: '25px' }}/>
        </div>
        </div>
      </nav>


      {/* Mobile Navbar */}
      
    
      <nav className="md:hidden flex justify-center z-10 w-[90vw] h-[15vh] fixed bottom-[0] ">
        <div className="nav-container pt-5 flex justify-between w-[90%]">
            <div className="mt-4">
             <Logo />
            </div>

            <div className="w-[120px] h-[50px] p-4 mt-2 flex justify-between items-center ">
        <FaGithub style={{ fontSize: '25px' }}/>
        <FaLinkedin style={{ fontSize: '25px' }}/>
        </div>

            {/* Mobile menu button (hamburger) */}
            <div
              onClick={handleMobileMenuToggle}
            
            >
              {isMobileMenuOpen ? (
               <div className="flex justify-center items-center h-[100%] pb-[10px] object-contain">
                 <img src={close} alt="Close"  className="w-[45px] h-[50px] p-2 cursor-pointer mb-[22px] z-20"/>
               </div>
              ) : (
                <div className=" flex justify-center items-center h-[100%] pb-3">
                  <img src={menu} alt="Menu"  className="w-[50px] h-[50px] p-2.5 cursor-pointer mb-[22px] z-20"/>
                </div>
              )}
            </div>
          </div>
        </nav>

     

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMobileMenuOpen && (
          <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: 500
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 }
          }}
         >
        <motion.div 
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="md:hidden flex flex-col fixed bottom-16 pb-10 w-full z-10">
          <ul className="text-[20px] items-center flex flex-col w-full justify-center p-5">
            <motion.li variants={itemVariants} className="nav-links w-full flex justify-center p-2 h-12 items-center rounded-[10px]">About</motion.li>
            <motion.li variants={itemVariants} className="mt-3 p-2 nav-links w-full flex justify-center h-12 items-center rounded-[10px]">Projects</motion.li>
            <motion.li variants={itemVariants} className="mt-3 p-2 nav-links w-full flex justify-center h-12 items-center rounded-[10px]">Contact</motion.li>
            <motion.li variants={itemVariants} className="mt-3 nav-links light:bg-white w-full flex justify-center h-12 items-center rounded-[10px]">More</motion.li>
          </ul>
        </motion.div>
        </motion.aside>
      )}
      

</AnimatePresence>
    </>
  );
}

export default Navbar;