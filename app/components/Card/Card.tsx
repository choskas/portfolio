import type { MouseEventHandler } from "react";
import {
  Container,
  Description,
  Image,
  Tags,
  Title,
  TitleImageContainer,
} from "./Card.styles";

interface CardProps<T, U> {
    img?: T;
    title?: string;
    description?: string;
    tags?: string;
    intersecting?: boolean;
    animationDelay?: string;
    onClick?: U;
}

const Card = ({img, title, description, tags, intersecting, animationDelay = '2', onClick = () =>{}}: CardProps<string, MouseEventHandler>) => (
  <Container intersecting={intersecting} animationDelay={animationDelay} onClick={onClick}>
    <TitleImageContainer>
      <Title> {title}</Title>
      <Image alt="card-image" src={img} />
    </TitleImageContainer>
    <Description>
      {description}
    </Description>
    <Tags>{tags}</Tags>
  </Container>
);

export default Card;
