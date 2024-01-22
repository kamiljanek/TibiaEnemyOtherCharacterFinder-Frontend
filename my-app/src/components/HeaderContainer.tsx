import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function HeaderContainer() {
  return (
    <Container fluid>
      <Row className="justify-content-center m-3">
        <Col xs="auto">
          <Image
            src={`${process.env.PUBLIC_URL}/tibialogo.png`}
            roundedCircle
            alt="Page logo"
            width="150px"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderContainer;
