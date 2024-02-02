import { GetInTouch, GetToKnow, Hero, Projects } from '../components'

const Home = () => {
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