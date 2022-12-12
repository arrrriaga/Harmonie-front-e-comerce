import RoutesComponent from "./routes";
import NavComponent from "./components/Nav";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavComponent />
      <Container>
        <RoutesComponent />
      </Container>
    </>
  );
}

export default App;
