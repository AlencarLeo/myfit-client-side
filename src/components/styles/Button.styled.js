import styled from "styled-components"

export const Button = styled.button`
  background-color:  ${(props) => props.theme.colors.cian};
  border: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 1rem;
  transition: all .3s ease-in-out;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;

  &:hover{
    background-color:  ${(props) => props.theme.colors.cianDark};
  }
`