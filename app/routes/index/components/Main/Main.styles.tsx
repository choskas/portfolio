import styled, { css } from "styled-components";
import { alignTopAnimation } from "~/GlobalStyles/Animations";
import colors from "../../../../GlobalStyles/GlobalColors";

interface DefaultProps {
  intersectingMain: boolean;
}

export const Title = styled.p<DefaultProps>`
  color: ${colors.font.title};
  font-size: 60px;
  font-family: "Press Start";
  animation: ${({intersectingMain}) => intersectingMain ? css`2s ${alignTopAnimation} ease-out` : ''};
`;

export const Subtitle = styled.p<DefaultProps>`
  color: ${colors.font.primary};
  font-size: 40px;
  font-family: "Press Start";
  animation: ${({intersectingMain}) => intersectingMain ? css`2s ${alignTopAnimation} ease-out` : ''};
`;

export const Description = styled.p<DefaultProps>`
  width: 60%;
  color: ${colors.font.primary};
  font-size: 24px;
  font-family: "Source Code Regular";
  animation: ${({intersectingMain}) => intersectingMain ? css`2s ${alignTopAnimation} ease-out` : ''};
`;
