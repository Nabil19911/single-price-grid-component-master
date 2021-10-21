import styled from "styled-components";

const GridLayer = styled.div`
  @media screen and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default GridLayer;
