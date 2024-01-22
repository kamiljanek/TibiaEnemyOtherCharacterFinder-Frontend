import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { CharacterResponse, ErrorResponse } from "../types/CharacterResult";
import { useState } from "react";
import CharacterResult from "./CharacterResult";

const baseUrl = "https://tibia.bieda.it/api/tibia-eocf/v1/characters/";

function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [characterData, setCharacterData] = useState<
    CharacterResponse | ErrorResponse | null
  >(null);
  const [promptData, setPromptData] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  const fetchCharacterData = async (input: string) => {
    setLoading(true);
    await fetch(`${baseUrl}${input}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacterData(data);
      });
    setLoading(false);
  };

  const fetchPromptData = async (input: string) => {
    await fetch(`${baseUrl}prompt?searchText=${input}&page=1&pageSize=10`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPromptData(data);
      });
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center p-0">
      <Row style={{ width: "320px" }}>
        <Col>
          <Form.Control
            type="text"
            autoFocus
            placeholder="Character Name"
            onChange={(event) => {
              setInput(event.target.value);
              if (event.target.value.length > 2) {
                setTimeout(() => {
                  fetchPromptData(event.target.value);
                  setShow(true);
                }, 1000);
              }

              if (event.target.value.length < 3) {
                setShow(false);
              }
            }}
            value={input}
          />
          <Dropdown.Menu show={show}>
            {promptData.map((item) => (
              <Dropdown.Item
                onClick={() => {
                  setInput(item);
                  fetchCharacterData(item);
                  setShow(false);
                }}
              >
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Col>
        <Col xs="auto">
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Button
              variant="outline-info"
              onClick={() => {
                fetchCharacterData(input);
                setShow(false);
              }}
            >
              Search
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col xs="auto" style={{ minWidth: "320px" }}>
          {characterData && <CharacterResult propertyValue={characterData} />}
        </Col>
      </Row>
    </Container>
  );
}

export default MainContainer;
