import styled from "styled-components";

export const Container = styled.a`
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
  height: 100%;
  width: 100%;
  &:hover > .info {
    opacity: 1;
  }

  img.visible {
    opacity: 1;
    transition: opacity 0.7s ease-in-out;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
`;

export const ImageInfos = styled.div.attrs({
  className: "info",
})`
  top: 0;
  opacity: 0;
  transition: opacity 0.4s linear;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: white;
    font-weight: bold;
    max-width: 90%;
    margin: 0 auto;
  }
`;
