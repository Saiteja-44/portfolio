import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Marquee from "./sections/Marquee";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />

          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home key="home" />
              <Marquee />
              <About />
              <Services />
              <Projects />
              <Contact />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
