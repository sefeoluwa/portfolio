import { Navbar, Footer, GetInTouch, GetToKnow, Hero, Projects } from "./components"
function App() {

  return (
    <div>
      <Navbar />
      <div className="">
        <Hero />
        <Projects />
        <GetToKnow />
        <GetInTouch />
      </div>
      <Footer />

    </div>
  )
}

export default App
