import styled, { css } from "styled-components";

export const Container = styled.header`
  background-image: ${({ backgroundImage }) =>
    backgroundImage && `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 40vh;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const InputContainer = styled.form`
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
    `}
`;

export const Button = styled.button`
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 35px;
  height: 35px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  &::after {
    content: "";
    top: 10px;
    left: 5px;
    position: absolute;
    display: block;
    width: 11px;
    height: 11px;
    transform: translate(20%, -20%);
    border-radius: 100px;
    border: 2px solid white;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 10px;
    width: 2px;
    top: 19px;
    right: 11px;
    transform: rotate(140deg);
    background-color: white;
  }
`;
