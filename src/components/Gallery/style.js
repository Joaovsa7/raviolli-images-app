import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 20px 0px;
  position: relative;
`;

export const Grid = styled.div`
  column-count: 2;
  @media only screen and (min-width: 960px) {
    column-count: 4;
  }
`;

export const Heading = styled.h1`
  font-size: 4rem;
  padding: 20px 0px;
`;
