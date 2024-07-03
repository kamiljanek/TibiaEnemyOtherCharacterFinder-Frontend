/* eslint-disable @typescript-eslint/no-unused-vars */
import { format } from "date-fns";
import { useContext } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import { toPascalCase } from "../functions/StringModificator";
import { PossibleInvisibleCharacterResponse } from "../types/CharacterResult";

type Props = {
  propertyValue: PossibleInvisibleCharacterResponse[];
  propertyName: string;
};

function CharactersArrayResult(props: Props) {
  const [_, setCharacterName] = useContext(SearchedCharacterNameContext);

  return (
    <Accordion>
      <Accordion.Item eventKey="0" style={{ padding: 0 }}>
        <Accordion.Header>{props.propertyName}</Accordion.Header>
        <Accordion.Body>
          <Container fluid style={{ minWidth: "260px", width: "100%", maxWidth: "800px" }}>
            <Row className="align-items-center">
              <Col className="p-0">
                <b>NAME</b>
              </Col>
              <Col style={{ maxWidth: "30px" }} className="text-center justify-content-end col-header">
                <b>SP</b>
              </Col>
              <Col className="text-center justify-content-end col-header">
                <b>FMD</b>
              </Col>
              <Col className="text-center justify-content-end col-header">
                <b>LMD</b>
              </Col>
            </Row>

            {props.propertyValue.map((item, idx) => (
              <Row key={`${idx}-${item.otherCharacterName}`} className="align-items-center">
                <Col
                  xs="auto"
                  className="flex-grow-1 character-link p-0"
                  onClick={() => {
                    setCharacterName(item.otherCharacterName);
                  }}>
                  {toPascalCase(item.otherCharacterName)}
                </Col>
                <Col style={{ minWidth: "30px", maxWidth: "30px" }} className="text-center justify-content-end col-value">
                  {item.numberOfMatches}
                </Col>
                <Col className="text-center justify-content-end col-value">{format(item.firstMatchDateOnly, "yyyy-MM-dd")}</Col>
                <Col className="text-center justify-content-end col-value">{format(item.lastMatchDateOnly, "yyyy-MM-dd")}</Col>
              </Row>
            ))}
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CharactersArrayResult;
