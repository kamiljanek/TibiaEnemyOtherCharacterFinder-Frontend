import { Container, Row, Col, Alert } from "react-bootstrap";
import { ErrorResponse } from "../types/CharacterResult";

type ErrorResponseProps = {
  error: ErrorResponse;
};

function ErrorResult(props: ErrorResponseProps) {
  const { error } = props;
  return (
    <Container className="d-grid mt-4">
      <Row>
        <Col xs="auto" style={{ minWidth: "320px" }}>
          <Alert key="danger" variant="danger">
            {error.detail}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorResult;
