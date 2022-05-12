import styled from "styled-components";

export const Base = styled.footer`
  background-color: #373737;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;

  nav ul{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

    li a{
    color: #00EEC3;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
  }
`