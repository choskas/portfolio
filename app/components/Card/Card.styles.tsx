import styled, { css } from "styled-components";
import { alignTopAnimation } from "~/GlobalStyles/Animations";
import colors from '../../GlobalStyles/GlobalColors';

interface DefaultProps {
    intersecting?: boolean;
    animationDelay?: string;
}

export const Container = styled.div<DefaultProps>`
    display: flex;
    flex-direction: column;
    height: 340px;
    width: 260px;
    border-radius: 4px;
    margin: 12px;
    padding: 12px 20px;
    background: ${colors.background.secondary};
    cursor: pointer;
    transition: transform 0.2s;
    animation: ${({intersecting, animationDelay}) => intersecting ? css`${animationDelay}s ${alignTopAnimation} ease-out` : ''};
    &:hover{
        transform: scale(1.1);

    }
`;

export const TitleImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-family: 'Press Start';
    font-size: 18px;
    color: ${colors.font.title};
    width: 60%;
`;

export const Image = styled.img`
    max-width: 60px;
    max-height: 60px;
`;

export const Description = styled.p`
    font-family: 'Source Code Regular';
    font-size: 14px;
    color: ${colors.font.primary};
`;

export const Tags = styled.p`
    font-family: 'Source Code Regular';
    font-size: 12px;
    color: ${colors.font.title};
    margin-top: auto;
`;