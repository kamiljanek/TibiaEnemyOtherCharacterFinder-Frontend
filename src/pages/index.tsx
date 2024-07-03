import { Row } from "react-bootstrap";

import FooterContainer from "../components/FooterContainer";
import MainContainer from "../components/MainContainer";
import { PageContainer } from "../components/PageContainer";

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
