import styles from './FilmInfo.module.css';
export const FilmInfo = filmInfo => {
  const { poster_path, vote_average, overview, genres, title } =
    filmInfo.filmInfo;

  const userScore = (vote_average * 10).toFixed() + '%';
  const getPoster = url =>
    url
      ? `https://image.tmdb.org/t/p/w300/${poster_path}`
      : 'https://fakeimg.pl/300x450?text=No+poster';

  return (
    <div className={styles.detailsWrap}>
      <img src={getPoster(poster_path)} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>User score: {userScore !== '0%' ? userScore : 'Not scored yet'}</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Genres</b>
        <div>
          {genres && genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
        </div>
      </div>
    </div>
  );
};
