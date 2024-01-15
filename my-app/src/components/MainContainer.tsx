import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { CharacterResponse, ErrorResponse } from "../types/CharacterResult";
import { useState } from "react";
import CharacterResult from "./CharacterResult";

function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<CharacterResponse | ErrorResponse | null>(
    null
  );

  const fetchData = async () => {
    setLoading(true);
    await fetch(`https://tibia.bieda.it/api/tibia-eocf/v1/characters/${input}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    setLoading(false);
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form.Control
            type="text"
            placeholder="Character Name"
            onChange={(e) => setInput(e.target.value)}
          />
        </Col>
        <Col md="auto">
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Button variant="outline-info" onClick={() => fetchData()}>
              Search
            </Button>
          )}
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">{data && <CharacterResult propertyValue={data} />}</Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
