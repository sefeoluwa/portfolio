import { useEffect } from 'react';
import { GetInTouch, GetToKnow, Hero, Projects } from '../components'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="pt-[8%] mx-3 md:mx-0 w-[90vw]">
              <Hero />
              <Projects />
              <GetToKnow />
              <GetInTouch />
            </div>
  )
}

export default Home