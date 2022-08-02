import styled from "styled-components";
import colors from "../../GlobalStyles/GlobalColors";

export const ButtonStyled = styled.button`
  background: transparent;
  border: 1px solid ${colors.button.border};
  border-radius: 5px;
  padding: 12px;
  color: ${colors.button.text};
  cursor: pointer;
  &:hover {
    color: ${colors.button.hover.text};
    background: ${colors.button.hover.background};
  }
`;

export default ButtonStyled;
