import { Form, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";

type TotalCountProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
};

function PaginationResult(props: TotalCountProps) {
  const { setCurrentPage, currentPage, totalPages } = props;
  const [inputValue, setInputValue] = useState<string>(`${currentPage}`);

  const handleInputChange = (value: string) => {
    if (/^\d+$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (numericValue >= 1 && numericValue <= totalPages) {
        setInputValue(value);
      }
    }
  };
  useEffect(
    function synchronizeCurrentPageAndInput() {
      setInputValue(`${currentPage}`);
    },
    [currentPage]
  );
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const goToFirstPage = () => {
    setCurrentPage(1);
  };
  const goToPrevPage = () => {
    if (currentPage <= 1) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage >= totalPages) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <Pagination>
      <Pagination.First onClick={goToFirstPage} disabled={isFirstPage} />
      <Pagination.Prev onClick={goToPrevPage} disabled={isFirstPage} />

      <div style={{ display: "flex", gap: "4px", margin: "0px 8px" }}>
        <Form.Control
          style={{
            display: "inline-block",
            width: "45px",
            textAlign: "center",
          }}
          size="sm"
          type="text"
          value={inputValue}
          onChange={(event) => {
            handleInputChange(event.currentTarget.value);
          }}
          onBlur={(event) => {
            setCurrentPage(+event.currentTarget.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.currentTarget.blur();
            }
          }}
        />
        <Form.Control
          style={{
            display: "inline-block",
            width: "70px",
            textAlign: "center",
          }}
          size="sm"
          type="text"
          value={`of ${totalPages}`}
          disabled
        />
      </div>
      <Pagination.Next onClick={goToNextPage} disabled={isLastPage} />
      <Pagination.Last onClick={goToLastPage} disabled={isLastPage} />
    </Pagination>
  );
}

export default PaginationResult;
