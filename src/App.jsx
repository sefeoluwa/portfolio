import { Navbar, Footer, GetInTouch, GetToKnow, Hero, Projects } from "./components"
function App() {

  return (
    <div className="md:p-10  p-5">
    <div className="main h-[90vh]">
      <Navbar />
      <div className="pt-[20%]">
        <Hero />
        <Projects />
        <GetToKnow />
        <GetInTouch />
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default App
