import styles from './Rating.module.css'; // import { Carousel, Container } from 'react-bootstrap';

const Rating = ({ rating }) => {

  return (
    <div className={styles.catalogRatingBody}>
      <div
        className={styles.catalogRatingActive}
        style={{ width: `${Math.round(rating) * 10}%` }}
      ></div>
      <div className={styles.catalogRatingItems}>
        <input
          type="radio"
          aria-label="1 stars"
          className={styles.catalogRatingItem}
          value="1"
          name="rating"
        />
        <input
          type="radio"
          aria-label="2 stars"
          className={styles.catalogRatingItem}
          value="2"
          name="rating"
        />
        <input
          type="radio"
          aria-label="3 stars"
          className={styles.catalogRatingItem}
          value="3"
          name="rating"
        />
        <input
          type="radio"
          aria-label="4 stars"
          className={styles.catalogRatingItem}
          value="4"
          name="rating"
        />
        <input
          type="radio"
          aria-label="5 stars"
          className={styles.catalogRatingItem}
          value="5"
          name="rating"
        />
      </div>
    </div>
  );
};

export default Rating;
