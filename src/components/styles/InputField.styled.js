import styled from "styled-components";

export const InputField = styled.div`
  position: relative;
  width: 280px;
  height: 50px;

  input{
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    font-size: .875rem;
    padding: 0 20px;
    background-color: transparent;
    color: #f1f1f1;
    outline: none;

    &:hover,
    &:focus,
    &:valid,
    &:active{
      border: 1px solid #00EEC3;
    }

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label{
      top: -0%;
      left: 15px;
      font-size: .75rem;
      color: #00EEC3;
    }
  }

  label{
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 .5rem;
    color: #f1f1f1;
    cursor: text;
    font-size: .875rem;
    transition: top .2s ease-in,
                left .2s ease-in,
                font-size .2s ease-in;
    background-color: #191919;
  }
`