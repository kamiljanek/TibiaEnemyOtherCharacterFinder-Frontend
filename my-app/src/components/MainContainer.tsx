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
import { useEffect, useState } from "react";
import CharacterResult from "./CharacterResult";
import { fetchCharacterData, fetchPromptData } from "../functions/FetchData";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";

function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [characterData, setCharacterData] = useState<
    CharacterResponse | ErrorResponse | null
  >(null);
  const [promptData, setPromptData] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [characterName, setCharacterName] = useState<string>("");

  useEffect(() => {
    if (loading === false && characterName !== "") {
      setLoading(true);
      fetchCharacterData(characterName, setLoading, setCharacterData);
      setInput(characterName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterName]);

  return (
    <SearchedCharacterNameContext.Provider
      value={[characterName, setCharacterName]}
    >
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
                    fetchPromptData(event.target.value, setPromptData);
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
                    setCharacterName(item);
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
                  setCharacterName(input);
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
    </SearchedCharacterNameContext.Provider>
  );
}

export default MainContainer;
