import { Container, Row } from "react-bootstrap";
import TibiaLogo2 from "./logos/TibiaLogo2";
import { LOGO_SIZE } from "../utils/constants";

function HeaderContainer() {
  return (
    <Container fluid>
      <Row className="justify-content-center m-3">
        <TibiaLogo2 size={LOGO_SIZE} />
      </Row>
    </Container>
  );
}

export default HeaderContainer;
