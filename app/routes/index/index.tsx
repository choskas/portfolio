import { useRef } from "react";
import useInViewPort from "~/hooks/useInViewPort";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import { MainContainer } from "./index.styles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Index() {
  const aboutRef = useRef();
  const mainRef = useRef();
  const workRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const intersectingAbout = useInViewPort(aboutRef)
  const intersectingMain = useInViewPort(mainRef)
  const intersectingWork = useInViewPort(workRef)
  const intersectingProjects = useInViewPort(projectsRef)
  const intersectingContact = useInViewPort(contactRef)

  return (
    <MainContainer>
      <Nav />
      <Main mainRef={mainRef} intersectingMain={intersectingMain} />
      <About aboutRef={aboutRef} intersectingAbout={intersectingAbout} />
      <Work workRef={workRef} intersectingWork={intersectingWork} />
      <Projects projectsRef={projectsRef} intersectingProjects={intersectingProjects} />
      <Contact contactRef={contactRef} intersectingContact={intersectingContact} />
      <Footer />
    </MainContainer>
  );
}
