import {
  StyledPagination,
  StyledPaginationItem,
  StyledPaginationNext,
  StyledPaginationPrev,
} from './Pagination.styled';

export const MyPagination = ({
  totalPages,
  currentPage,
  onChangePage,
  setSearchParams,
  query
}) => {
  let items = [];
  if (currentPage > 1) {
    items.push(
      <StyledPaginationPrev
        key="prev"
        onClick={() => {
          onChangePage(currentPage - 1);
          if (query) {
            setSearchParams({ query, page: currentPage - 1 });
          }
          if (!query) {setSearchParams({ page: currentPage - 1 });}
        }}
      />
    );
  }

  if (currentPage === 1) {
    for (let page = currentPage; page <= currentPage + 4; page++) {
      items.push(
        <StyledPaginationItem
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
            if (query) {
              setSearchParams({ query, page });
            }
            if (!query) {
              setSearchParams({ page });
            }
          }}
        >
          {page}
        </StyledPaginationItem>
      );
    }
  }
  if (currentPage === 2) {
    for (let page = currentPage - 1; page <= currentPage + 3; page++) {
      items.push(
        <StyledPaginationItem
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
            if (query) {
              setSearchParams({ query, page });
            }
            if (!query) {
              setSearchParams({ page });
            }
          }}
        >
          {page}
        </StyledPaginationItem>
      );
    }
  }
  if (currentPage >= 3 && currentPage < totalPages - 2) {
    for (let page = currentPage - 2; page <= currentPage + 2; page++) {
      items.push(
        <StyledPaginationItem
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
            if (query) {
              setSearchParams({ query, page });
            }
            if (!query) {
              setSearchParams({ page });
            }
          }}
        >
          {page}
        </StyledPaginationItem>
      );
    }
  }

  if (currentPage === totalPages - 2) {
    for (let page = currentPage - 3; page <= currentPage + 1; page++) {
      items.push(
        <StyledPaginationItem
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
            if (query) {
              setSearchParams({ query, page });
            }
            if (!query) {
              setSearchParams({ page });
            }
          }}
        >
          {page}
        </StyledPaginationItem>
      );
    }
  }

  if (currentPage === totalPages - 1) {
    for (let page = currentPage - 4; page <= currentPage; page++) {
      items.push(
        <StyledPaginationItem
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
            if (query) {
              setSearchParams({ query, page });
            }
            if (!query) {
              setSearchParams({ page });
            }
          }}
        >
          {page}
        </StyledPaginationItem>
      );
    }
  }

  if (currentPage < totalPages) {
    items.push(
      <StyledPaginationNext
        key="next"
        onClick={() => {
          onChangePage(currentPage + 1);
          if (query) {
            setSearchParams({ query, page: currentPage + 1 });
          }
          if (!query) {
            setSearchParams({ page: currentPage + 1 });
          }
        }}
      />
    );
  }

  return <StyledPagination>{items}</StyledPagination>;
};
