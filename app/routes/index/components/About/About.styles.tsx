import styled, { css } from "styled-components";
import { alignRightAnimation } from "~/GlobalStyles/Animations";
import colors from '../../../../GlobalStyles/GlobalColors';

interface DefaultProps {
    intersectingAbout?: boolean;
}

export const Description = styled.p<DefaultProps>`
    width: 60%;
    font-family: 'Source Code Regular';
    color: ${colors.font.primary};
    font-size: 16px;
    text-align: justify;
    opacity: ${({intersectingAbout}) => intersectingAbout ? '1' : '0'};
    animation: ${({intersectingAbout}) => intersectingAbout ? css`2s ${alignRightAnimation} ease-out` : ''};
`;