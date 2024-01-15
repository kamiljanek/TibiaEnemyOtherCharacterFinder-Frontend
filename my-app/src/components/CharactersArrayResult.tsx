import { Accordion, Col, Container, Row } from "react-bootstrap";
import { PossibleInvisibleCharacterResult } from "../types/CharacterResult";
import { format } from "date-fns";

type Props = {
  propertyValue: PossibleInvisibleCharacterResult[];
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
              <Col></Col>
              <Col sm={1} className="text-center">
                SP
              </Col>
              <Col sm={2} className="text-center">
                FMD
              </Col>
              <Col sm={2} className="text-center">
                LMD
              </Col>
            </Row>

            {props.propertyValue.map((item) => (
              <Row className="align-items-center">
                <Col>{item.otherCharacterName}</Col>
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

export default CharactersArrayResult;
