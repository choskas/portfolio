import styled from "styled-components";

interface DefaultProps {
    intersectingProjects?: boolean;
}

export const CardsContainer = styled.h3<DefaultProps>`
    font-family: 'Source Code Regular';
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;