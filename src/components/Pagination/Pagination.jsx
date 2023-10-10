import { useSelector } from 'react-redux';

import {
  StyledPagination,
  StyledPaginationItem,
  StyledPaginationNext,
  StyledPaginationPrev,
} from './Pagination.styled';

import { selectPage } from 'redux/selectors';

export const MyPagination = ({
  totalPages,
  onChangePage,
  setSearchParams,
  query,
}) => {
  let items = [];
  const amountOfPages = totalPages < 500 ? totalPages : 500;

  const page = useSelector(selectPage);

  const currentPage = Number(page);

  if (currentPage > 1) {
    items.push(
      <StyledPaginationPrev
        key="prev"
        onClick={() => {
          onChangePage(currentPage - 1);
          if (query) {
            setSearchParams({ query, page: currentPage - 1 });
          }
          if (!query) {
            setSearchParams({ page: currentPage - 1 });
          }
        }}
      />
    );
  }

  if (amountOfPages <= 2 && currentPage === 2) {
    for (let page = 2; page <= amountOfPages; page++) {
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

  if (amountOfPages > 2 && currentPage === 2) {
    for (let page = 1; page <= currentPage + 3; page++) {
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

  if (amountOfPages <= 2 && currentPage <= 1) {
    for (let page = 1; page <= amountOfPages; page++) {
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

  if (amountOfPages > 2 && currentPage <= 1) {
    for (let page = 1; page <= currentPage + 4; page++) {
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

  if (
    amountOfPages > 2 &&
    currentPage <= amountOfPages - 2 &&
    currentPage > 2
  ) {
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

  if (amountOfPages > 2 && currentPage === amountOfPages - 1) {
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

  if (amountOfPages > 2 && currentPage >= amountOfPages) {
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

  if (currentPage < amountOfPages) {
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
