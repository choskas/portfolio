import { Container } from "~/components/Container/Container.styles";
import { Description, Title } from "./About.styles";

interface AboutInterface {
  aboutRef: React.RefObject<Element> | any;
  intersectingAbout: boolean;
}

const About = ({ aboutRef, intersectingAbout }: AboutInterface) => (
  <Container ref={aboutRef}>
    <Title intersectingAbout={intersectingAbout}>
      <span>1. </span>
      About
    </Title>
    <Description intersectingAbout={intersectingAbout}>
      Hi!. I'm Oscar. Since I was a child, I was attracted to new technologies
      and how they relate to human beings, but when the Internet arrived my
      interest increased. <br />  <br /> Maybe i'm like you because i used to use things like
      myspace as a social network and limewire to download music. <br /> <br />  Sometime after
      my third end of the world (2012) I decided to study psychology to
      understand a little about us and after that I studied web development at
      IronHack (2019). <br /> <br /> Right now I am working for the biggest startup in
      LATAM.
    </Description>
  </Container>
);

export default About;
