import { Container, Row, Col, Table } from "react-bootstrap";
import { SimilarCharactersResponse } from "../types/CharacterResult";
import { toPascalCase } from "../functions/StringModificator";
import { useContext } from "react";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import PaginationResult from "./PaginationResult";

type SimilarCharactersProps = {
  similarCharacters: SimilarCharactersResponse;
};

function SimilarCharactersResult(props: SimilarCharactersProps) {
  const [_, setCharacterName] = useContext(SearchedCharacterNameContext);

  const { similarCharacters } = props;
  return (
    <Container>
      {similarCharacters && (
        <Row>
          <Col xs="auto" style={{ minWidth: "320px" }}>
            Characters that contain input
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <tbody>
                {similarCharacters.names.map((name) => (
                  <tr>
                    <td
                      className="character-link"
                      onClick={() => setCharacterName(name)}
                    >
                      {toPascalCase(name)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {similarCharacters.totalCount}
            <PaginationResult totalRows={similarCharacters.totalCount} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default SimilarCharactersResult;
