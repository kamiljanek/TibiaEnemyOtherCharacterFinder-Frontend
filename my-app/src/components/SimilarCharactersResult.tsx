import { Container, Row, Col, Table } from "react-bootstrap";
import { SimilarCharactersResponse } from "../types/CharacterResult";

type SimilarCharactersProps = {
  similarCharacters: SimilarCharactersResponse | null;
};

function SimilarCharactersResult(props: SimilarCharactersProps) {
  const { similarCharacters } = props;
  return (
    <Container>
      {similarCharacters && (
        <Row>
          <Col xs="auto" style={{ minWidth: "320px" }}>
            <Table striped bordered hover variant="dark">
              <tbody>
                <tr>
                  <td>{similarCharacters.names[0]}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default SimilarCharactersResult;
