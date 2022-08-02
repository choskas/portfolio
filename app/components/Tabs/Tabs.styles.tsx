import styled, { css } from "styled-components";
import { alignTopAnimation } from "~/GlobalStyles/Animations";
import colors from "~/GlobalStyles/GlobalColors";

interface ContainerProps {
  intersectingWork: boolean;
}

interface TabProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
    opacity: ${({intersectingWork}) => intersectingWork ? '1' : '0'};
    animation: ${({intersectingWork}) => intersectingWork ? css`2s ${alignTopAnimation} ease-out` : ''};
  width: 80%;
`;
export const TabsList = styled.ul`
  box-sizing: border-box;
  color: ${colors.font.title};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Tab = styled.li<TabProps>`
  width: 150px;
  text-decoration: none;
  font-family: "Source Code Regular";
  transition: color 0.1s ease 0.2s;
  transition: border-bottom 0.1s ease 0.2s;
  border-bottom: ${({ isActive }) =>
    isActive ? `1px solid ${colors.font.special}` : `none`};
  color: ${({ isActive }) =>
    isActive ? colors.font.special : colors.font.title};
  &:hover {
    color: ${colors.font.special};
  }
  & div {
    cursor: pointer;
  }
`;
export const TabContent = styled.div`
  font-family: "Source Code Regular";
  height: 200px;
  width: 100%;
  color: ${colors.font.primary};
`;
