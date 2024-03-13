/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Dropdown, Form, Row, Spinner } from "react-bootstrap";
import { CharacterResponse, ErrorResponse, SimilarCharactersResponse } from "../types/CharacterResult";
import { useEffect, useState } from "react";
import CharacterResult from "./CharacterResult";
import { fetchCharacterData, fetchPromptData, fetchSimilarCharactersData } from "../functions/FetchData";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import ErrorResult from "./RenderError";
import SimilarCharactersResult from "./SimilarCharactersResult";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";
import { LOGO_SIZE } from "../utils/constants";
import TibiaLogo2 from "./logos/TibiaLogo2";

function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [characterResponse, setCharacterResponse] = useState<CharacterResponse | ErrorResponse | null>(null);
  const [characterData, setCharacterData] = useState<CharacterResponse | null>(null);
  const [errorData, setErrorData] = useState<ErrorResponse | null>(null);
  const [similarCharacters, setSimilarCharacters] = useState<SimilarCharactersResponse | null>(null);
  const [promptData, setPromptData] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [characterName, setCharacterName] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const showDropdownList = () => setShow(true);
  const hideDropdownList = () => setShow(false);
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  useEffect(() => {
    if (loading === false && characterName !== "") {
      showLoader();
      fetchCharacterData(characterName, setCharacterResponse).then(() => hideLoader());
      setSimilarCharacters(null);
      setInput(characterName);
      hideDropdownList();
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
      showLoader();
      fetchSimilarCharactersData(characterName, currentPage, setSimilarCharacters).then(() => hideLoader());
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
        showDropdownList();
      }
      if (searchText.length < 3) {
        hideDropdownList();
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLogoClicked) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isLogoClicked]);

  const toggleWidth = () => {
    setIsLogoClicked(true);
  };

  const smallLogoSize = LOGO_SIZE * 0.4;

  return (
    <SearchedCharacterNameContext.Provider value={[characterName, setCharacterName]}>
      <SimilarCharactersCurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
        <Container fluid className="d-flex flex-column align-items-center p-0">
          <div className={`absoluteCenter align-items-center d-flex flex-column ${isLogoClicked ? "fadeOut" : "transform-50"}`}>
            <div className="title logo" onClick={toggleWidth}>
              Tibia Stalker
            </div>
            <div className="subtitle logo" onClick={toggleWidth}>
              Click!
            </div>
          </div>
          <Row style={{ width: "360px" }} className="align-items-center">
            <Col xs="auto" className="p-0 logo" onClick={toggleWidth}>
              <div className={isLogoClicked ? "targetPosition" : "centerPosition"}>
                <TibiaLogo2 size={smallLogoSize} />
              </div>
            </Col>
            <Col className={isLogoClicked ? "fadeIn" : "fadeOut"}>
              <Row>
                <Col className="p-1">
                  <Form.Control
                    type="text"
                    autoFocus
                    placeholder="Character Name"
                    onChange={event => {
                      setSearchText(event.target.value);
                    }}
                    value={input}
                    onFocus={event => {
                      event.target.value.length > 2 && showDropdownList();
                    }}
                    onBlur={() => {
                      setTimeout(() => hideDropdownList(), 100);
                    }}
                    onKeyDown={event => {
                      event.key === "Enter" && setCharacterName(input);
                    }}
                  />
                  <Dropdown.Menu show={show}>
                    {promptData.map(item => (
                      <Dropdown.Item
                        key={item}
                        onClick={() => {
                          setCharacterName(item);
                        }}>
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Col>
                <Col xs="auto" className="p-1">
                  {loading ? (
                    <Spinner animation="border" />
                  ) : (
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        setCharacterName(input);
                      }}>
                      Search
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs="auto" style={{ minWidth: "320px", marginLeft: smallLogoSize }}>
              {characterData && <CharacterResult character={characterData} />}
              {errorData && <ErrorResult error={errorData} />}
              {similarCharacters && <SimilarCharactersResult similarCharacters={similarCharacters} />}
            </Col>
          </Row>
        </Container>
      </SimilarCharactersCurrentPageContext.Provider>
    </SearchedCharacterNameContext.Provider>
  );
}

export default MainContainer;
