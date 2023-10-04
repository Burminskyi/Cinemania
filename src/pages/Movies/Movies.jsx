import HomePageHero from 'components/Hero/Hero';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = ({
  currentPage,
  onChangePage,
  setTotalMoviesByNamePagesAmount,
}) => {
  return (
    <>
      <HomePageHero
      />
      <MoviesList
        currentPage={currentPage}
        onChangePage={onChangePage}
        setTotalMoviesByNamePagesAmount={setTotalMoviesByNamePagesAmount}
      />
    </>
  );
};

export default Movies;
