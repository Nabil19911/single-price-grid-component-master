import Bottom from "./Components/Bottom";
import Middle from "./Components/Middle";
import Upper from "./Components/Upper";
import Main from "./UI/Main.styled";
import GridLayer from "./UI/Common/Grid.styled";

function App() {
  return (
    <div className="App">
      <Main>
        <Upper />
        <GridLayer>
          <Middle />
          <Bottom />
        </GridLayer>
      </Main>
    </div>
  );
}

export default App;
