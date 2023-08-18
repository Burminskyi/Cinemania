import { useEffect, useState } from 'react';
import {
  StyledCatalogItem,
  StyledFilmInfo,
  StyledFilmInfoWrap,
  StyledImageWrap,
  StyledJenresList,
  StyledPhotoCard,
  StyledPhotoCardImage,
} from './MoviesGalleryItem.styled';
import Rating from 'components/Rating/Rating';
import { getMoviesById } from 'services/getMovies';
import { Modal } from 'components/ModalPage/Modal';

export const MoviesGalleryItem = ({
  movie,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies
}) => {
  const { poster_path, original_title, release_date, vote_average, id } = movie;
  const [movieGenres, setMovieGenres] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getMoviesById(id);
        const { genres } = data;

        const genresNames = genres.map(obj => obj.name).join(', ');
        setMovieGenres(genresNames);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGenres();
  }, [id]);

  const imagePath = 'https://image.tmdb.org/t/p/w500';

  const onModal = () => {
    setShowModal(prev => !prev);
  };

  const posterImage = `${imagePath}${poster_path}`;
  let releaseYear = null;
  if (release_date) {
    releaseYear = release_date.slice(0, 4);
  }

  return (
    <>
      <StyledCatalogItem onClick={onModal}>
        <StyledPhotoCard>
          <StyledImageWrap>
            <StyledPhotoCardImage
              src={
                posterImage
                  ? posterImage
                  : 'https://marketplace.canva.com/EAE9OZ4Eh9o/1/0/1131w/canva-black-minimalist-coming-soon-poster-rmN33IHdOEM.jpg'
              }
              alt={original_title}
            />
          </StyledImageWrap>
          <StyledFilmInfo>
            <p>{original_title ? original_title : 'Coming soon'}</p>
            <StyledFilmInfoWrap>
              <StyledJenresList>
                {movieGenres.length ? movieGenres : 'Unknown'}
              </StyledJenresList>
              <p class="info-item">|</p>
              <p class="info-item">{releaseYear ? releaseYear : 'Unknown'}</p>
            </StyledFilmInfoWrap>
          </StyledFilmInfo>
        </StyledPhotoCard>
        <Rating rating={vote_average} />
      </StyledCatalogItem>
      {showModal && (
        <Modal
          data={movie}
          posterImage={posterImage}
          onClose={onModal}
          addToLibrary={addToLibrary}
          removeFromLibrary={removeFromLibrary}
          favoriteMovies={favoriteMovies}
        />
      )}
    </>
  );
};
