/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";
import { toPascalCase } from "../functions/StringModificator";
import { SimilarCharactersResponse } from "../types/CharacterResult";
import PaginationResult from "./PaginationResult";

type SimilarCharactersProps = {
  similarCharacters: SimilarCharactersResponse;
};

function SimilarCharactersResult(props: SimilarCharactersProps) {
  const { similarCharacters } = props;
  const [_, setCharacterName] = useContext(SearchedCharacterNameContext);
  const [currentPage, setCurrentPage] = useContext(SimilarCharactersCurrentPageContext);
  const pageSize = 10;
  const totalPages = Math.ceil(props.similarCharacters.totalCount / pageSize);

  return (
    <Container>
      {similarCharacters && (
        <Row>
          <Col xs="auto" style={{ minWidth: "320px" }} className="d-flex flex-column align-items-center">
            <Table striped bordered hover variant="dark" className="text-center">
              <thead>
                <tr>
                  <th className="bg-success">
                    <i>SIMILAR CHARACTERS</i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {similarCharacters.names.map(name => (
                  <tr key={name}>
                    <td className="character-link" onClick={() => setCharacterName(name)}>
                      {toPascalCase(name)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <PaginationResult setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default SimilarCharactersResult;
