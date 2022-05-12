import styled from "styled-components"

export const Base = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  max-width: 940px;
  height: 80px;
  margin: 0 auto;

  a{
    color: #00EEC3;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
`