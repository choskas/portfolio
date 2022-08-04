import ButtonStyled from "~/components/Button/Button.styles";
import {
  NavContainer,
  NavLink,
  NavLinkButtonContainer,
  NavLogo,
} from "./Nav.styles";
import Logo from "../../../../assets/Logo.png";

const Nav = () => {
  return (
    <NavContainer>
      <NavLogo>
        <img src={Logo} alt="logo" />
      </NavLogo>
      <NavLinkButtonContainer>
        <NavLink href="#">
          <span>1.</span> About
        </NavLink>
        <NavLink href="#">
          <span>2.</span> Work
        </NavLink>
        <NavLink href="#">
          <span>3.</span> Projects
        </NavLink>
        <NavLink href="#">
          <span>4.</span> Contact
        </NavLink>
        <ButtonStyled> Resume </ButtonStyled>
      </NavLinkButtonContainer>
    </NavContainer>
  );
};

export default Nav;
