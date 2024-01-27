import { Pagination } from "react-bootstrap";
import { SimilarCharactersCurrentPageContext } from "../contexts/SimilarCharactersCurrentPageContext";
import { useContext } from "react";

type PaginationProps = {
  totalPages: number;
  // currentPage: number;
};

function PaginationRange(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useContext(
    SimilarCharactersCurrentPageContext
  );

  const { totalPages } = props;
  let pagination = [],
    i = 1;
  let active = false;

  while (i <= totalPages) {
    if (i === currentPage) {
      active = true;
    } else {
      active = false;
    }

    if (
      i <= 2 ||
      i >= totalPages - 1 ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pagination.push(
        <Pagination.Item active={active} onClick={() => setCurrentPage(i)}>
          {i}
        </Pagination.Item>
      );
      i++;
    } else {
      pagination.push(<Pagination.Ellipsis />);
      i = i < currentPage ? currentPage - 1 : totalPages - 1;
    }
  }
  return <>{pagination.map((item) => item)}</>;
}

export default PaginationRange;
