import { useState, useEffect } from "react";
// import { getMoviesByQuery } from '../../services/getAPI';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([
        'movie-1',
        'movie-2',
        'movie-3',
    ]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieSearchName = searchParams.get('movieName') || '';

    // useEffect(() => {
    //     getMoviesByQuery()
    //     .then 
    // }, [])
    
    const updateQueryString = event => {
        if (event.target.value === '') {
            return setSearchParams({});
        }
        setSearchParams({movieName: event.target.value})
        
        // const nextParams = movie !== "" ? { movie } : {};
        // setSearchParams(nextParams);
    };
    
    const filteredMovies = movies.filter(movie => movie.includes(movieSearchName));

    return (
        <div>
        <input
            type='text'
            value={movieSearchName}
            onChange={updateQueryString}
        />
        {filteredMovies.map(movie => {
            return (
                <li key={movie}>
                    <Link to={`${movie}`} state={{ from: location }}>
                        {movie}
                    </Link>
                </li>
            );
        })}
        </div>
    )
}

export default Movies;
