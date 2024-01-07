import { Col, Container, Form, Row } from "react-bootstrap";

function MainContainer() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs="auto">
          <Form.Control
            className="bg-dark-subtle"
            type="text"
            placeholder="Character Name"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
