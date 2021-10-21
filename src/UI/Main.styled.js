import styled from "styled-components";

const Main = styled.div`
  background: white;
  width: 90%;
  max-width: 715px;
  min-width: 337px;
  margin: 5em auto;
  border-radius: 0.5em;
  box-shadow: 0px 5px 15px -10px black;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    margin: auto;
  }
`;

export default Main;
