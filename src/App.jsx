import { Navbar, Footer, GetInTouch, GetToKnow, Hero, Projects } from "./components"
import { BrowserRouter } from "react-router-dom"
function App() {


  return (
    <BrowserRouter>
    
    <div className="xl:p-5 p-1 ">
        <div className="main bg-tertiary rounded-3xl">
            <Navbar />
            <div className="pt-[15%]">
              <Hero />
              <Projects />
              <GetToKnow />
              <GetInTouch />
            </div>
            <Footer />
        </div>
      </div>
      
      </BrowserRouter>
  )
}

export default App
