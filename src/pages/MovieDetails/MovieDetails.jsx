import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { getMoviesById } from 'services/getMovies';
import { FilmInfo } from 'components/FilmInfo/FilmInfo';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMoviesByID = async () => {
      try {
        const data = await getMoviesById(movieId);
        setFilmInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesByID();
  }, [movieId]);

  return (
    <>
      <button type="button" className={styles.detailsBtn}>
        <Link to={backLinkHref.current}>Go back</Link>
      </button>
      {filmInfo && <FilmInfo filmInfo={filmInfo} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
