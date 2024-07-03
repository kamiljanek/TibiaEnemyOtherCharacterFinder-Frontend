import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row, Spinner } from "react-bootstrap";

import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";
import { fetchCharacterData, fetchPromptData, fetchSimilarCharactersData } from "../functions/FetchData";
import { CharacterResponse, ErrorResponse, SimilarCharactersResponse } from "../types/CharacterResult";
import { LOGO_SIZE } from "../utils/constants";
import CharacterResult from "./CharacterResult";
import TibiaLogo2 from "./logos/TibiaLogo2";
import ErrorResult from "./RenderError";
import SimilarCharactersResult from "./SimilarCharactersResult";

function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [characterResponse, setCharacterResponse] = useState<CharacterResponse | ErrorResponse | null>(null);
  const [characterData, setCharacterData] = useState<CharacterResponse | null>(null);
  const [errorData, setErrorData] = useState<ErrorResponse | null>(null);
  const [similarCharacters, setSimilarCharacters] = useState<SimilarCharactersResponse | null>(null);
  const [promptData, setPromptData] = useState<string[]>([]);
  const [dropdownListVisibility, setDropdownListVisibility] = useState(false);
  const [characterName, setCharacterName] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const showDropdownList = () => setDropdownListVisibility(true);
  const hideDropdownList = () => setDropdownListVisibility(false);
  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  useEffect(() => {
    if (loading === false && characterName !== "") {
      showLoader();
      setInput(characterName);
      fetchCharacterData(characterName, setCharacterResponse).then(() => hideLoader());
      setSimilarCharacters(null);
      hideDropdownList();
    }
  }, [characterName]);

  useEffect(() => {
    setErrorData(null);
    setCharacterData(null);

    if (characterResponse === null) {
      return;
    }

    if ("detail" in characterResponse) {
      setErrorData(characterResponse);
    } else if ("name" in characterResponse) {
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
    }, 800);
    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const [isLogoClicked, setIsLogoClicked] = useState(false);

  const toggleWidth = () => {
    setIsLogoClicked(true);
  };

  const smallLogoSize = LOGO_SIZE * 0.4;

  return (
    <SearchedCharacterNameContext.Provider value={[characterName, setCharacterName]}>
      <SimilarCharactersCurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
        <Container fluid className="d-flex flex-column align-items-center p-0">
          <div className={`absoluteCenter align-items-center d-flex flex-column ${isLogoClicked ? "fadeOut" : "transform-50"}`} onClick={toggleWidth}>
            <div className="title logo">Tibia Stalker</div>
            <div className="subtitle logo">Click here!</div>
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
                      setTimeout(() => hideDropdownList(), 500);
                    }}
                    onKeyDown={event => {
                      event.key === "Enter" && setCharacterName(input);
                    }}
                  />
                  <Dropdown.Menu show={dropdownListVisibility}>
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
