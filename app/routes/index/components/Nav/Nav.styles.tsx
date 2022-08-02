import styled from "styled-components";
import colors from "../../../../GlobalStyles/GlobalColors";

export const NavContainer = styled.nav`
  height: 100px;
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & img {
    width: 120px;
  }
`;

export const NavLinkButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  font-family: "Source Code Regular";
  font-size: 14px;
  align-items: center;
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.font.title};
  border-bottom: none;
  transition: border-bottom 0.1s ease 0s;
  transition: color 0.1s ease 0s;

  &:hover {
    border-bottom: 1px solid ${colors.font.special};
    color: ${colors.font.special};
  }
  & span {
    color: ${colors.font.special};
  }
`;
export const NavButton = styled.button``;
