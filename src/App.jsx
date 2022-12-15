import styled from "styled-components";
import Home from "./Components/Home";
import { useScroll, motion } from "framer-motion";
import About from "./Components/About";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import { Helmet } from "react-helmet";
import { useState } from "react";
function App() {
  const { scrollYProgress } = useScroll();
  const [section, setSection] = useState();

  return (
    <AppContainer className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rightson</title>
        <link rel="canonical" href="https://rightson1.github.io/rightson/" />
        <meta name="description" content="Rightson" />
      </Helmet>
      <motion.div
        className="scroll"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="home">
        <Home setSection={setSection} section={section} />
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <About section={section} setSection={setSection} />
      <Education section={section} setSection={setSection} />
      <Contact section={section} setSection={setSection} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  min-height: 200vh;
  width: 100vw;
  background-color: black;
  overflow-x: hidden;

  .lines {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    pointer-events: none;
    z-index: 1;
    .line {
      min-height: 100%;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .scroll {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: fuchsia;
    transform-origin: 0%;
    z-index: 10;
  }
`;
export default App;
