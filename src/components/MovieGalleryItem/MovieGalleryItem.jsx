import React from 'react';
import {
  Rating,  
  GenresBlock,
  MovieListItem,
  MoviePoster,
  MovieTitle,
  ReleaseDate,
} from './MovieGalleryItem.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { RatingProgressbar } from 'components/RatingProgressbar/RatingProgressbar';
import NoPoster from '../Image/no-poster.webp';
import Genres from '../Genres/Genres';

const MovieGalleryItem = ({
  movie: {
    id,
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    genre_ids,
  },
  state,
  genres,
}) => {
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={state}>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : NoPoster
            }
            alt={original_title}
            width="200"
          />
        </MoviePoster>
        <MovieTitle>{title}</MovieTitle>
        {release_date && <ReleaseDate>{parseInt(release_date)}</ReleaseDate>}
        {vote_average !== 0 && <Rating rating={vote_average?.toFixed(1)} />}
      </Link>
      <GenresBlock>
        <Genres data={genre_ids?.slice(0, 1)} genres={genres} />
      </GenresBlock>
    </MovieListItem>
  );
};

MovieGalleryItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieGalleryItem;
