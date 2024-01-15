import { Accordion, Col, Container, Row } from "react-bootstrap";
import { PossibleInvisibleCharacterResponse } from "../types/CharacterResult";
import { format } from "date-fns";

type Props = {
  propertyValue: PossibleInvisibleCharacterResponse[];
  propertyName: string;
};

function CharactersArrayResult(props: Props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" style={{ padding: 0 }}>
        <Accordion.Header style={{ maxWidth: "1500px" }}>
          {props.propertyName}
        </Accordion.Header>
        <Accordion.Body>
          <Container fluid>
            <Row className="align-items-center">
              <Col>
                <b>NAME</b>
              </Col>
              <Col sm={1} className="text-center">
                <b>SP</b>
              </Col>
              <Col sm={2} className="text-center">
                <b>FMD</b>
              </Col>
              <Col sm={2} className="text-center">
                <b>LMD</b>
              </Col>
            </Row>

            {props.propertyValue.map((item) => (
              <Row className="align-items-center">
                <Col>{toPascalCase(item.otherCharacterName)}</Col>
                <Col sm={1} style={{ fontSize: 10 }} className="text-center">
                  {item.numberOfMatches}
                </Col>
                <Col sm={2} style={{ fontSize: 10 }} className="text-center">
                  {format(item.firstMatchDateOnly, "yyyy-MM-dd")}
                </Col>
                <Col sm={2} style={{ fontSize: 10 }} className="text-center">
                  {format(item.lastMatchDateOnly, "yyyy-MM-dd")}
                </Col>
              </Row>
            ))}
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function toPascalCase(s: string) {
  return s.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
}

export default CharactersArrayResult;
