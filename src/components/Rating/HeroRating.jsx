import {
  StyledHeroRatingBody,
  StyledRatingActive,
  StyledRatingItem,
  StyledRatingItems,
} from './Rating.styled';

const HeroRating = ({ rating }) => {
  const calculatedRating = Math.round(rating * 10) + '%';

  return (
    <StyledHeroRatingBody>
      <StyledRatingActive
        style={{ width: `${calculatedRating}` }}
      ></StyledRatingActive>
      <StyledRatingItems>
        <StyledRatingItem
          type="radio"
          aria-label="1 stars"
          value="1"
          name="rating"
        />
        <StyledRatingItem
          type="radio"
          aria-label="2 stars"
          value="2"
          name="rating"
        />
        <StyledRatingItem
          type="radio"
          aria-label="3 stars"
          value="3"
          name="rating"
        />
        <StyledRatingItem
          type="radio"
          aria-label="4 stars"
          value="4"
          name="rating"
        />
        <StyledRatingItem
          type="radio"
          aria-label="5 stars"
          value="5"
          name="rating"
        />
      </StyledRatingItems>
    </StyledHeroRatingBody>
  );
};

export default HeroRating;
