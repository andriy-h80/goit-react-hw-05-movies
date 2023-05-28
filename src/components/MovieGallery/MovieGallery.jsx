import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieListStyled } from './MovieGallery.styled';
import MovieGalleryItem from '../MovieGalleryItem/MovieGalleryItem';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieGalleryItem
          key={movie.id}
          movie={movie}
          state={{ from: location }}
        />
      ))}
    </MovieListStyled>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
};

export default MovieGallery;