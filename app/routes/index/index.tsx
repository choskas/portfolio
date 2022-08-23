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
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMainScreenData } from "~/config/graphql";

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
  const data = useLoaderData();
  console.log(data, 'data')
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

export const loader: LoaderFunction = async () => {
  try {
  const mainScreen = await getMainScreenData();
  return {
    mainScreen,
  }
} catch (error) {
  console.log(error)
}
};
