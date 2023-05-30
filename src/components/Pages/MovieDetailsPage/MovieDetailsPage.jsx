import { Suspense } from "react";
import { useRef, useState, useEffect } from "react";
import { getMoviesDetailsById } from '../../../services/getAPI';
import Loader from '../../Loader/Loader';
import ErrorImageView from '../../ErrorImageView/ErrorImageView';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Title } from '../../Title/Title';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const { movieId } = useParams();

    // get movies by query
    useEffect(() => {

        (async () => {
          try {
            setIsLoading(true);
            setError(null);

            const data = await getMoviesDetailsById(movieId);
            setMovieDetails(data.results);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        })();
      }, [movieId]);
    
    //   const {
    //     poster_path,
    //     original_title,
    //     title,
    //     release_date,
    //     vote_average,
    //     genres,
    //     overview,
    //   } = movieDetails;

    return (
    <>
        {isLoading && <Loader />}
        {error && <ErrorImageView message="Oops, mistake... Please try again" />}    
        <Title title='Movie Details' />
        <Link to={backLinkLocationRef.current}>Go back</Link>

        <ul>
            <li>
                <Link to='cast'>Cast</Link>
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
        </ul>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>  
    </>
    )
}

export default MovieDetails;
