import styled from "styled-components"

export const LinkButton = styled.a`
  color: ${(props) => props.theme.colors.cian};
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`