import styled from "styled-components"

export const Button = styled.button`
  background-color: #16CAC7;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 1rem;
  transition: all .3s ease-in-out;
  font-weight: 700;
  text-transform: uppercase;

  &:hover{
    background-color: #1FFFD6;
  }
`