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

export const ImageGalleryItem = ({ movie }) => {
  const { poster_path, original_title, release_date, vote_average, id } = movie;
  const [movieGenres, setMovieGenres] = useState([]);

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
  // const [showModal, setShowModal] = useState(false);

  // const onModal = () => {
  //   setShowModal(prev => !prev);
  // };

  console.log(typeof release_date);

  const posterImage = `${imagePath}${poster_path}`;
  let releaseYear = null;
  if (release_date) {
    releaseYear = release_date.slice(0, 4);
  }

  return (
    //   <li style={{
    //     width: 'calc((100% - 45px) / 3)',
    //     overflow: 'hidden'
    //   }}>
    //     <img
    //     //   onClick={onModal}
    //       src={posterImage}
    //       alt={original_title}
    //       style={{
    //         display: 'block',
    //         objectFit: 'fill'
    //       }}
    //     />
    //     {/* {showModal && <Modal picture={picture} onClose={onModal} />} */}
    //   </li>
        <StyledCatalogItem>
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
  );
};
