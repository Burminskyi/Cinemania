import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/getMovies';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (movies.length > 0) setIsLoading(true);
    const query = searchParams.get('query');
    if (!query) return;

    const fetchMoviesByQuery = async () => {
      try {
        const data = await getMoviesByName(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesByQuery();
  }, [movies.length, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();

    if (!query) {
      alert('Введите запрос');
      return;
    }

    setSearchParams({ query });
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <button type="submit" className="">
          <span className="">Search</span>
        </button>

        <input
          name="query"
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
