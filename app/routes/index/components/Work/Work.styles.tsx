import styled, { css } from "styled-components";
import { alignRightAnimation } from "~/GlobalStyles/Animations";
import colors from '../../../../GlobalStyles/GlobalColors';

interface DefaultProps {
    intersectingWork?: boolean;
}

export const Title = styled.h3<DefaultProps>`
    font-family: 'Source Code Regular';
    color: ${colors.font.title};
    opacity: ${({intersectingWork}) => intersectingWork ? '1' : '0'};
    animation: ${({intersectingWork}) => intersectingWork ? css`2s ${alignRightAnimation} ease-out` : ''};
    & span{
        color: ${colors.font.special};
    }
`;