import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CharacterResponse, ErrorResponse } from "../types/CharacterResult";
import { useState } from "react";
import CharacterResult from "./CharacterResult";

function MainContainer() {
  const [input, setInput] = useState<string>("");

  const [data, setData] = useState<CharacterResponse | ErrorResponse | null>(
    null
  );

  const getCharacter = () => {
    fetch(`https://tibia.bieda.it/api/tibia-eocf/v1/characters/${input}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
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
          <Button variant="outline-info" onClick={() => getCharacter()}>
            Search
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">{data && <CharacterResult propertyValue={data} />}</Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
