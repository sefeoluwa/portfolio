import { Link } from 'react-router-dom';
import { know } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const GetToKnow = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <section ref={ref} id='about' className='flex flex-col gap-[32px] mt-[20vh] xxl:h-[80vh] p-5'>
      <h2 className='flex justify-center w-full font-bold text-center lg:text-[48px] sm:text-[35px] xs:text-[30px] text-[32px] lg:leading-[40px]'>
        Get to Know me
      </h2>

      <div className='flex flex-wrap items-start justify-around gap-[55px] max-w-full p-3 md:p-10 mt-[5%]'>
        {know.map((about, index) => (
          <motion.div
            key={about.name}
            animate={animate ? 'show' : 'hidden'}
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className='know-cards cursor-pointer flex flex-col items-center text-center justify-center gap-5 rounded-[32px] h-[350px] md:h-[300px] w-[330px] md:w-[300px] overflow-hidden p-5 bg-[#191938] border-r-2'
          >
            <Link to={`/${about.id}`}>
              <p className='text-[32px] font-bold'>{about.name}</p>
            </Link>
            <p className='text-[16px] text-[#808080]'>{about.description}</p>
            <div className='site-btn flex justify-start px-14 py-3 rounded-[10px] bg-tertiary items-start'>
              <a href={about.id}  rel='noopener noreferrer'>
                <button>{about.linkName}</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GetToKnow;