import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: inline-block;
  text-align: right;
  bottom: 36px;
  right: 11px;
  @media only screen and (min-width: 960px) {
    right: 60px;
  }
`;

export const Icon = styled.div`
  width: 75px;
  height: 75px;
  display: inline-block;
  border-radius: 100px;
  background-color: white;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  transform: translateY(400%);
  transition: transform 0.4s linear;
  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 25px;
    width: 2px;
    background-color: black;
    top: 20px;
    right: 29px;
    transform: rotate(-45deg);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 25px;
    width: 2px;
    background-color: black;
    top: 20px;
    left: 28px;
    transform: rotate(45deg);
  }

  &.slide-entrance {
    transform: translateY(0%);
    transition: transform 0.4s linear;
  }
`;
