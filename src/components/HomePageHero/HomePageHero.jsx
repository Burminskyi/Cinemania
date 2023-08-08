import Rating from 'components/Rating/Rating';
import { Button, Carousel } from 'react-bootstrap';
import styles from './HomePageHero.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/getMovies';

const HomePageHero = () => {
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    const updateComponent = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateComponent();
  }, []);

  return (
    <section className={styles.heroItemWrap}>
      <Carousel slide={false}>
              {trendingMovies.map(movie => {
            const posterImage = `${imagePath}${movie.backdrop_path}`;
            return (
              <Carousel.Item key={movie.id}>
                <img
                  className="d-block w-100"
                  src={posterImage}
                  alt={movie.original_title}
                  style={{ zIndex: '-1', position: 'relative' }}
                />
                <Carousel.Caption className={styles.contentWrap}>
                  <h3>{movie.original_title}</h3>
                  <Rating rating={movie.vote_average} />
                  <p>{movie.overview}</p>
                  <div className="mb-2">
                    <Button size="lg">Watch trailer</Button>{' '}
                    <Button size="lg">More details</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
        })}

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/original//2vFuG6bWGyQUzYS9d69E5l85nIz.jpg"
            alt="Second slide"
            style={{ zIndex: '-1', position: 'relative' }}
          />
          <Carousel.Caption className={styles.contentWrap}>
            <h3>Трансформеры</h3>
            <Rating />
            <p className="mb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quam sunt, asperiores saepe, aspernatur autem magni iusto possimus
              nulla delectus velit corrupti illum voluptas, dolor dolore at.
              Accusamus, hic tenetur.
            </p>
            <div className="mb-2">
              <Button size="lg">Watch trailer</Button>{' '}
              <Button size="lg">More details</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/original//5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
            alt="Third slide"
            style={{ zIndex: '-1', position: 'relative' }}
          />
          <Carousel.Caption className={styles.contentWrap}>
            <h3>Стражи галактики</h3>
            <Rating />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              quam sunt, asperiores saepe, aspernatur autem magni iusto possimus
              nulla delectus velit corrupti illum voluptas, dolor dolore at.
              Accusamus, hic tenetur.
            </p>
            <div className="mb-2">
              <Button size="lg">Watch trailer</Button>{' '}
              <Button size="lg">More details</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </section>
  );
};

export default HomePageHero;
