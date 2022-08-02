import ButtonStyled from "~/components/Button/Button.styles";
import { Container } from "~/components/Container/Container.styles";
import { Subtitle, Title, Description } from "./Main.styles";

interface MainInterface {
    mainRef: React.RefObject<Element> | any;
    intersectingMain: boolean;
}

const Main = ({mainRef, intersectingMain}: MainInterface) => (
  <Container ref={mainRef}>
    <Title intersectingMain={intersectingMain}>Choskas</Title>
    <Subtitle intersectingMain={intersectingMain}>Also known as Oscar Delta</Subtitle>
    <Description intersectingMain={intersectingMain}>
      Full Stack Dev, specialist on building beautiful and complex front ends.
      Always learning the most updated technologies and tools.
    </Description>
    <a href="#">
      <ButtonStyled>Go to my GitHub</ButtonStyled>
    </a>
  </Container>
);

export default Main;
