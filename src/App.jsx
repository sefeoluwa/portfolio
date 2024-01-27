import { useEffect, useState } from "react";
import { Navbar, Footer, GetInTouch, GetToKnow, Hero, Projects } from "./components"
function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleColorSchemeChange = () => {
      setIsDarkMode(colorSchemeMediaQuery.matches);
    };

    document.addEventListener('mousemove', handleMouseMove);
    colorSchemeMediaQuery.addEventListener('change', handleColorSchemeChange);

    // Initial color scheme check
    setIsDarkMode(colorSchemeMediaQuery.matches);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      colorSchemeMediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  return (
    <div className="md:p-10  p-5">
      <div
          className="absolute"
          style={{
            width: '100%',
            height: '100vh',
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 20%, ${
              isDarkMode ? '#fff' : '#000'
            } 20%)`,
          }}
        ></div>
    <div className="main h-[90vh]">
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
  )
}

export default App
