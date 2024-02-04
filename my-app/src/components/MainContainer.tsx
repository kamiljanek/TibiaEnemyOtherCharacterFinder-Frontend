import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import {
  CharacterResponse,
  ErrorResponse,
  SimilarCharactersResponse,
} from "../types/CharacterResult";
import { useEffect, useState } from "react";
import CharacterResult from "./CharacterResult";
import {
  fetchCharacterData,
  fetchPromptData,
  fetchSimilarCharactersData,
} from "../functions/FetchData";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import ErrorResult from "./RenderError";
import SimilarCharactersResult from "./SimilarCharactersResult";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";

function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [characterResponse, setCharacterResponse] = useState<
    CharacterResponse | ErrorResponse | null
  >(null);
  const [characterData, setCharacterData] = useState<CharacterResponse | null>(
    null
  );
  const [errorData, setErrorData] = useState<ErrorResponse | null>(null);
  const [similarCharacters, setSimilarCharacters] =
    useState<SimilarCharactersResponse | null>(null);
  const [promptData, setPromptData] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [characterName, setCharacterName] = useState<string>("");
  console.log(characterName);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("aaaaaaaaa");
    if (loading === false && characterName !== "") {
      console.log("bbbbbbb");
      setLoading(true);
      fetchCharacterData(characterName, setCharacterResponse).then(() =>
        setLoading(false)
      );
      setSimilarCharacters(null);
      setInput(characterName);
      setShow(false);
    }
  }, [characterName]);

  useEffect(() => {
    setErrorData(null);
    setCharacterData(null);
    if (characterResponse !== null && "detail" in characterResponse) {
      setErrorData(characterResponse);
    } else {
      setCharacterData(characterResponse);
    }
  }, [characterResponse]);

  useEffect(() => {
    if (errorData?.status === 404) {
      setLoading(true);
      fetchSimilarCharactersData(
        characterName,
        currentPage,
        setSimilarCharacters
      ).then(() => setLoading(false));
    }
  }, [currentPage]);

  useEffect(() => {
    if (errorData?.status === 404) {
      setCurrentPage(1);
    }
  }, [errorData]);

  useEffect(() => {
    setInput(searchText);
    const delayDebounce = setTimeout(() => {
      if (searchText.length > 2) {
        fetchPromptData(searchText, setPromptData);
        setShow(true);
      }
      if (searchText.length < 3) {
        setShow(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  return (
    <SearchedCharacterNameContext.Provider
      value={[characterName, setCharacterName]}
    >
      <SimilarCharactersCurrentPageContext.Provider
        value={[currentPage, setCurrentPage]}
      >
        <Container fluid className="d-flex flex-column align-items-center p-0">
          <Row style={{ width: "320px" }}>
            <Col>
              <Form.Control
                type="text"
                autoFocus
                placeholder="Character Name"
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
                value={input}
                onFocus={(event) => {
                  if (event.target.value.length > 2) {
                    setShow(true);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setCharacterName(input);
                  }
                }}
              />
              <Dropdown.Menu show={show}>
                {promptData.map((item) => (
                  <Dropdown.Item
                    onClick={() => {
                      console.log(item);
                      console.log("ccccc");
                      setCharacterName(item);
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
                  }}
                >
                  Search
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs="auto" style={{ minWidth: "320px" }}>
              {characterData && <CharacterResult character={characterData} />}
              {errorData && <ErrorResult error={errorData} />}
              {similarCharacters && (
                <SimilarCharactersResult
                  similarCharacters={similarCharacters}
                />
              )}
            </Col>
          </Row>
        </Container>
      </SimilarCharactersCurrentPageContext.Provider>
    </SearchedCharacterNameContext.Provider>
  );
}

export default MainContainer;
