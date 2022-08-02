import { useRef } from "react";
import useInViewPort from "~/hooks/useInViewPort";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Work from "./components/Work/Work";
import { MainContainer } from "./index.styles";

export default function Index() {
  const aboutRef = useRef();
  const mainRef = useRef();
  const workRef = useRef();
  const intersectingAbout = useInViewPort(aboutRef)
  const intersectingMain = useInViewPort(mainRef)
  const intersectingWork = useInViewPort(workRef)

  return (
    <MainContainer>
      <Nav />
      <Main mainRef={mainRef} intersectingMain={intersectingMain} />
      <About aboutRef={aboutRef} intersectingAbout={intersectingAbout} />
      <Work workRef={workRef} intersectingWork={intersectingWork} />
    </MainContainer>
  );
}
