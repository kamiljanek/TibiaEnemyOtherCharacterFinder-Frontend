import { Container, Row, Col, Table } from "react-bootstrap";
import { SimilarCharactersResponse } from "../types/CharacterResult";
import { toPascalCase } from "../functions/StringModificator";
import { useContext } from "react";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import PaginationResult from "./PaginationResult";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";

type SimilarCharactersProps = {
  similarCharacters: SimilarCharactersResponse;
};

function SimilarCharactersResult(props: SimilarCharactersProps) {
  const [_, setCharacterName] = useContext(SearchedCharacterNameContext);

  const [currentPage, setCurrentPage] = useContext(
    SimilarCharactersCurrentPageContext
  );

  const pageSize = 10;
  const totalPages = Math.ceil(props.similarCharacters.totalCount / pageSize);

  const { similarCharacters } = props;
  return (
    <Container>
      {similarCharacters && (
        <Row>
          <Col
            xs="auto"
            style={{ minWidth: "320px" }}
            className="d-flex flex-column align-items-center"
          >
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr>
                  <th className="bg-success">
                    <i>SIMILAR CARACTERS</i>
                  </th>
                </tr>
              </thead>
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
            <PaginationResult
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default SimilarCharactersResult;
