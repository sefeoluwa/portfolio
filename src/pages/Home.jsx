import { GetInTouch, GetToKnow, Hero, Projects } from '../components'

const Home = () => {
  return (
    <div className="pt-[8%]">
              <Hero />
              <Projects />
              <GetToKnow />
              <GetInTouch />
            </div>
  )
}

export default Home