import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.blackLight};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`
export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
`
