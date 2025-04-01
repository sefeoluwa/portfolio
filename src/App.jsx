import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { About, Bookshelf, Contact, Home, Stack, Blog } from "./pages"



function App() {


  return (
    <Router>
    
    <div className=" py-4 flex items-center justify-center ">
        <div className="main w-[95vw] bg-tertiary rounded-3xl">
            <Navbar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bookshelf" element={<Bookshelf />} />
              <Route path="/blog" element={<Blog />} />
              </Routes>
            <Footer />
        </div>
      </div>
      
      </Router>
  )
}

export default App
