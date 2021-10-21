import styled from "styled-components";

const UpperPart = styled.div`
  h1 {
    color: hsl(179, 62%, 43%);
  }
  p:nth-child(2) {
    color: hsl(71, 73%, 54%);
    padding-bottom: 1em;
  }
  p:nth-child(3) {
    color: hsl(218, 22%, 67%);
    line-height: 1.7;
    @media screen and (orientation: landscape) {
      &:nth-child(3) {
        margin-right: 5em;
      }
    }
  }
`;

export default UpperPart;
