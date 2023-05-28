import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoPoster from '../Image/no-poster.webp';
import { Rating, GenresBlock, MovieListItem, MoviePoster, MovieTitle } from './MovieCard.styled';
import Genres from '../Genres/Genres';

const MovieCard = ({
    movie: { id, poster_path, original_title, vote_average, genre_ids },
}) => {
    const location = useLocation();

    return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
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
        <MovieTitle>{original_title}</MovieTitle>
        {vote_average !== 0 && <Rating rating={vote_average?.toFixed(1)} />}
        <GenresBlock>
          <Genres data={genre_ids?.slice(0, 2)} />
        </GenresBlock>
      </Link>
    </MovieListItem>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
