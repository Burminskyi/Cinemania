import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledUpcomingContentBtn,
  StyledUpcomingContentText,
  StyledUpcomingContentTitle,
  StyledUpcomingContentWrap,
  StyledUpcomingFilm,
  StyledUpcomingImage,
  StyledUpcomingListItem,
  StyledUpcomingListLeft,
  StyledUpcomingListText,
  StyledUpcomingName,
  StyledUpcomingThumb,
  StyledUpcomingTitle,
} from './UpcomingMovie.styled';
import { StyledHeroContainer } from 'components/Hero/Hero.styled';

import { Loader } from 'components/Loader/Loader';

import {
  fetctUpcomingMovies,
  removeFromFavoriteMovies,
  setFavoriteMovies,
} from 'redux/Movies/slice';
import { selectFavoriteMovies, selectLoadingStatus, selectUpcomingMovie } from 'redux/selectors';

export const UpcomingMovie = () => {
  const isLoading = useSelector(selectLoadingStatus);
  const upcomingMovie = useSelector(selectUpcomingMovie);
  const favoriteMovies = useSelector(selectFavoriteMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetctUpcomingMovies());
  }, [dispatch]);

  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const isInLibrary =
    favoriteMovies &&
    upcomingMovie &&
    favoriteMovies.some(favoriteMovie => favoriteMovie.id === upcomingMovie.id);

  const addToLibrary = data => {
    dispatch(setFavoriteMovies(data));
  };

  const removeFromLibrary = id => {
    dispatch(removeFromFavoriteMovies(id));
  };

  const handleClick = e => {
    e.preventDefault();
    addToLibrary(upcomingMovie);
  };

  const handleDelete = e => {
    e.preventDefault();
    removeFromLibrary(upcomingMovie.id);
  };

  return (
    <section>
      <StyledHeroContainer>
        {isLoading && <Loader />}
        {upcomingMovie && (
          <>
            <StyledUpcomingTitle>UPCOMING THIS MONTH</StyledUpcomingTitle>
            <StyledUpcomingFilm>
              <StyledUpcomingImage>
                <source
                  srcSet={imagePath + upcomingMovie.backdrop_path}
                  media="(min-width: 768px)"
                  loading="lazy"
                />
                <source
                  srcSet={imagePath + upcomingMovie.poster_path}
                  media="(min-width: 320px)"
                  loading="lazy"
                />
                <img
                  src={imagePath + upcomingMovie.poster_path}
                  alt="Movie Poster"
                  loading="lazy"
                />
              </StyledUpcomingImage>

              <StyledUpcomingContentWrap>
                <StyledUpcomingName>
                  {upcomingMovie.original_title}
                </StyledUpcomingName>

                <StyledUpcomingThumb>
                  <StyledUpcomingListLeft>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>
                        Release date
                      </StyledUpcomingListText>
                      <p style={{ marginLeft: '58px' }}>
                        {upcomingMovie.release_date}
                      </p>
                    </StyledUpcomingListItem>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>
                        Vote / Votes
                      </StyledUpcomingListText>
                      <p style={{ marginLeft: '68px' }}>
                        <span>{upcomingMovie.vote_average}</span> /{' '}
                        <span>{upcomingMovie.vote_count}</span>
                      </p>
                    </StyledUpcomingListItem>
                  </StyledUpcomingListLeft>

                  <ul>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>
                        Popularity
                      </StyledUpcomingListText>
                      <p style={{ marginLeft: '78px' }}>
                        {upcomingMovie.popularity}
                      </p>
                    </StyledUpcomingListItem>
                    <StyledUpcomingListItem>
                      <StyledUpcomingListText>Genre</StyledUpcomingListText>
                      <p style={{ marginLeft: '108px' }}>
                        Action, Science Fiction, Horror
                      </p>
                    </StyledUpcomingListItem>
                  </ul>
                </StyledUpcomingThumb>

                <StyledUpcomingContentTitle>About</StyledUpcomingContentTitle>
                <StyledUpcomingContentText>
                  {upcomingMovie.overview}
                </StyledUpcomingContentText>

                {isInLibrary ? (
                  <StyledUpcomingContentBtn
                    type="button"
                    onClick={handleDelete}
                  >
                    Remove from library
                  </StyledUpcomingContentBtn>
                ) : (
                  <StyledUpcomingContentBtn type="button" onClick={handleClick}>
                    Add to my library
                  </StyledUpcomingContentBtn>
                )}
              </StyledUpcomingContentWrap>
            </StyledUpcomingFilm>
          </>
        )}
      </StyledHeroContainer>
    </section>
  );
};
