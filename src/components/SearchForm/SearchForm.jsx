import {
  StyledSearchForm,
  StyledSearchFormBtn,
  StyledSearchFormInput,
} from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <StyledSearchForm
    // onSubmit={handleSubmit}
    >
      <StyledSearchFormBtn type="submit">
        <svg
          width="20"
          height="20"
          class="DocSearch-Search-Icon"
          viewBox="0 0 20 20"
        >
          <path
            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
            stroke="white"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </StyledSearchFormBtn>

      <StyledSearchFormInput
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
    </StyledSearchForm>
  );
};
