import { useState } from "react";
import { Logo } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { sideVariants, itemVariants } from '../utils/motion.js'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");

 
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // animate sidebar render on mobiles


  return (
    <>
       {/* Desktop Navbar */}
       <nav className="nav-full sticky top-0 left-[4.5vw] rounded-b-2xl lg:w-[90vw] flex justify-center pt-5 z-10">
        <div className="nav-container flex justify-between w-[65%] mx-auto">
          <Link 
          to='#hero
          ' 
          className="cursor-pointer"
          onClick={() => {
            setActive("");
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
          }}>
          <Logo />
          </Link>

          <ul className="flex justify-around w-[9cm] pt-2 text-[15px] items-center h-12">
            <li className="nav-full-li cursor-pointer text-[#808080] hover:text-[#f2f2f2] active:text-[#fff]">About</li>
            <li className="nav-full-li cursor-pointer text-[#808080] hover:text-[#f2f2f2] active:text-[#fff]">Projects</li>
            <li className="nav-full-li cursor-pointer text-[#808080] hover:text-[#f2f2f2] active:text-[#fff]">Contact</li>
            <li className="nav-full-li cursor-pointer text-[#808080] hover:text-[#f2f2f2] active:text-[#fff]">More</li>
          </ul>
        <div className="w-[100px] h-[50px] p-4 flex justify-between items-center ">
        <FaGithub style={{ fontSize: '25px' }}/>
        <FaLinkedin style={{ fontSize: '25px' }}/>
        </div>
        </div>
      </nav>


      {/* Mobile Navbar */}
      
    
      <nav className="mobile-nav md:hidden flex justify-center z-10 h-[12vh] fixed bottom-0 w-full mb-2 ">
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
              className="flex justify-center items-center h-[80%]"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine style={{ fontSize: '40px', cursor: 'pointer' }}/>
              ) : (
                  <RiMenuFoldFill style={{ fontSize: '38px', cursor: 'pointer' }}/>
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