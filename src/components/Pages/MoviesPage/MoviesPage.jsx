import { useState, useEffect } from "react";
import {  useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByQuery, getGenresMovies } from '../../../services/getAPI';
import { MoviesBlock } from './MoviesPage.styled';
import Searchbar from '../../Searchbar/Searchbar';
import Loader from '../../Loader/Loader';
import ErrorImageView from '../../ErrorImageView/ErrorImageView';
import { Title } from '../../Title/Title';
import MovieGallery from '../../MovieGallery/MovieGallery';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [genres, setGenres] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    // get movies by query
    useEffect(() => {

        const movieSearchName = searchParams.get('query');

        if (!movieSearchName) {
          setMovies([]);
          return;
        }

        (async () => {
          try {
            setIsLoading(true);
            setError(null);

            const data = await getMoviesByQuery(movieSearchName);
            setMovies(data.results);
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        })();
      }, [searchParams]);
    
    // get genres
    useEffect(() => {
        (async function getGenres() {
        try {
            setIsLoading(true);
            setError(null);

            const genresData = await getGenresMovies();
            setGenres(genresData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        })();
    }, []);

    const handleSearchChange = value => {
        if (value === searchParams.get('query')) {
          return toast(
            'You have already searched for this keyword. Please try another one.'
          );
        }
        setSearchParams({ query: value });
      };

    return (
        <MoviesBlock>
        <Searchbar onSubmit={handleSearchChange} />
        {isLoading && <Loader />}
        {error && <ErrorImageView message="Oops, mistake... Please try again" />}    
        {!error && movies && movies.length > 0 && (
            <>
            <Title title='We have the following movies:' />
             
            <MovieGallery movies={movies} genres={genres} />
            </>
        )}
        </MoviesBlock>
    )
}

export default Movies;
