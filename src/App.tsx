import "./App.css";
import { PageContainer } from "./components/PageContainer";
import MainContainer from "./components/MainContainer";
import FooterContainer from "./components/FooterContainer";
import { Row } from "react-bootstrap";

function App() {
  return (
    <PageContainer>
      <Row style={{ flexGrow: 1, alignItems: "center" }}>
        <MainContainer />
      </Row>
      <Row>
        <FooterContainer />
      </Row>
    </PageContainer>
  );
}

export default App;
