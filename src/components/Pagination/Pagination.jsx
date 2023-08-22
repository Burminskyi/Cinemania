import { StyledPagination } from './Pagination.styled';

export const MyPagination = ({ totalPages, currentPage, onChangePage }) => {
  let items = [];
  if (currentPage > 1) {
    items.push(
      <StyledPagination.Prev
        key="prev"
        onClick={() => onChangePage(currentPage - 1)}
      />
    );
  }

  if (currentPage === 1) {
    for (let page = currentPage; page <= currentPage + 4; page++) {
      items.push(
        <StyledPagination.Item
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
          }}
        >
          {page}
        </StyledPagination.Item>
      );
    }
  }
  if (currentPage === 2) {
    for (let page = currentPage - 1; page <= currentPage + 3; page++) {
      items.push(
        <StyledPagination.Item
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
          }}
        >
          {page}
        </StyledPagination.Item>
      );
    }
  }
  if (currentPage >= 3 && currentPage < totalPages - 2) {
    for (let page = currentPage - 2; page <= currentPage + 2; page++) {
      items.push(
        <StyledPagination.Item
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
          }}
        >
          {page}
        </StyledPagination.Item>
      );
    }
  }

  if (currentPage === totalPages - 2) {
    for (let page = currentPage - 3; page <= currentPage + 1; page++) {
      items.push(
        <StyledPagination.Item
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
          }}
        >
          {page}
        </StyledPagination.Item>
      );
    }
  }

  if (currentPage === totalPages - 1) {
    for (let page = currentPage - 4; page <= currentPage; page++) {
      items.push(
        <StyledPagination.Item
          key={page}
          data-page={page}
          active={page === currentPage}
          onClick={() => {
            onChangePage(page);
          }}
        >
          {page}
        </StyledPagination.Item>
      );
    }
  }

  if (currentPage < totalPages) {
    items.push(
      <StyledPagination.Next
        key="next"
        onClick={() => onChangePage(currentPage + 1)}
      />
    );
  }

  return <StyledPagination>{items}</StyledPagination>;
};
