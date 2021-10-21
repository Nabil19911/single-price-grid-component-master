import styled from "styled-components";

const MiddlePart = styled.div`
  background: hsl(179, 62%, 43%);
  color: white;
  p:nth-child(2) {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 0.5em;
    span:nth-child(1) {
      font-size: 2.3rem;
      font-weight: 700;
    }
    span:nth-child(2) {
      color: hsl(204, 43%, 93%);
    }
  }
  p:nth-child(3) {
    margin-bottom: 2em;
  }
  button {
    font-size: 1rem;
    font-weight: 700;
    color: white;
    width: 100%;
    background: hsl(71, 73%, 54%);
    outline: none;
    border: none;
    border-radius: 5px;
    height: 3em;
    box-shadow: 0px 10px 30px -15px black;
    &:active {
      box-shadow: 0px 10px 30px -10px black;
    }
    @media screen and (orientation: landscape) {
      width: 82%;
    }
  }
`;

export default MiddlePart;
