import styled from "styled-components";
import colors from "~/GlobalStyles/GlobalColors";

export const FooterContainer = styled.section`
    display: flex;
    justify-content: center;
    font-family: 'Source Code Regular';
    font-size: 12px;
    color: ${colors.font.primary};
    padding-bottom: 24px;
`;

export const FooterAnchor = styled.a`
    cursor: pointer;
    color: ${colors.font.primary};
    text-decoration: none;
    &:hover{
        color: ${colors.font.special}
    }
`;