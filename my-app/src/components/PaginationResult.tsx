import { Pagination } from "react-bootstrap";
import { useContext } from "react";
import PaginationRange from "./PaginationRange";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";

type TotalCountProps = {
  totalRows: number;
};

function PaginationResult(props: TotalCountProps) {
  const { totalRows } = props;
  const [currentPage, setCurrentPage] = useContext(
    SimilarCharactersCurrentPageContext
  );

  const pageSize = 10;
  const totalPages = Math.ceil(totalRows / pageSize);

  return (
    <Pagination size="sm">
      <Pagination.First onClick={() => setCurrentPage(1)} />
      <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
      <PaginationRange totalPages={totalPages} />
      <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
      <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
    </Pagination>
  );
}

export default PaginationResult;
