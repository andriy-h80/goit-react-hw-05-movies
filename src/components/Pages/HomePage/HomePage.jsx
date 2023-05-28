import { useState, useEffect } from "react";
import { getTrendingMovies } from '../../../services/getAPI';
import Loader from '../../Loader/Loader';
import { HomeBlock } from './HomePage.styled';
import { Title } from '../../Title/Title';
import ErrorImageView from '../../ErrorImageView/ErrorImageView';
// import MovieCard from '../../MovieCard/MovieCard';
import MovieGallery from '../../MovieGallery/MovieGallery';


const Home = () => {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
      

    // get popular movies
    useEffect(() => {
        (async () => {
        try {
            setIsLoading(true);
            setError(false);

            const data = await getTrendingMovies();
            setMovies(data.results);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    })();
  }, []);

    return (
    <HomeBlock>
        {isLoading && <Loader />}
        {error && <ErrorImageView message="Oops, mistake... Please try again" />}
        {!error && movies && movies.length > 0 && (
            <>
            <Title title='Trending today' />
            <MovieGallery movies={movies} />
            
            {/* <MovieCardContainer>
            {movies.map(movie => {
                  return (
                      <MovieCard key={movie.id} movie={movie} />
                  );
                })}
            </MovieCardContainer> */}
            </>
        )}
    </HomeBlock>
    )    
};

export default Home;
