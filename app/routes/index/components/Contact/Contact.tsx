import ButtonStyled from "~/components/Button/Button.styles";
import { Container } from "~/components/Container/Container.styles";
import { Title } from "~/components/Title/Title.styles";
import { ContainerButton, KnowMoreText } from "./Contact.styles";

interface ContactInterface {
  contactRef: React.RefObject<Element> | any;
  intersectingContact: boolean;
}

const Contact = ({ contactRef, intersectingContact }: ContactInterface) => (
  <Container ref={contactRef}>
    <Title intersecting={intersectingContact}>
      <span>4. </span>
      Contact
    </Title>
    <KnowMoreText>Want to know more about me ?</KnowMoreText>
    <ContainerButton>
      <a
        href="https://www.linkedin.com/in/oscardelta/"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonStyled>Go to my Linkedin </ButtonStyled>
      </a>
    </ContainerButton>
    <ContainerButton>
      <a
        href="https://www.instagram.com/choskas.dev/"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonStyled>Go to my instagram</ButtonStyled>
      </a>
    </ContainerButton>
  </Container>
);

export default Contact;
