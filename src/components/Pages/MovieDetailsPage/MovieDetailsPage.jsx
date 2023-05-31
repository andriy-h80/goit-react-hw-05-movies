import { Suspense } from "react";
import { useRef, useState, useEffect } from "react";
import { getMoviesDetailsById } from '../../../services/getAPI';
import Loader from '../../Loader/Loader';
import ErrorImageView from '../../ErrorImageView/ErrorImageView';
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Title } from '../../Title/Title';
import NoPoster from '../../Image/no-poster.webp';
import { StyledLink, BaseInfo, PosterImg, AdditionalInfo, Text, MainTitle, Genres, Genre, InfoList, InfoLink } from './MovieDetailsPage.styled';

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
            setMovieDetails(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        })();
      }, [movieId]);
    
      const {
        poster_path,
        original_title,
        title,
        release_date,
        vote_average,
        genres,
        overview,
      } = movieDetails;

    return (
    <>
        {isLoading && <Loader />}
        {error && <ErrorImageView message="Oops, mistake... Please try again" />}    
               
        <Title title='Movie Details' />
        <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
        <BaseInfo>
            <PosterImg
                src={
                    poster_path
                    ? `https://image.tmdb.org/t/p/original${poster_path}`
                    : NoPoster
                    }
                    alt={title ?? original_title}
                    width="500"
            />
            <div>
            <MainTitle>
                {title ?? original_title}
                {release_date && <span> ({parseInt(release_date)})</span>}
            </MainTitle>
                <p>User score: {Math.round(vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {genres && (
                <Genres>
                  {genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}
                </Genres>
              )}
            </div>
        </BaseInfo>

        <AdditionalInfo>   
        <Text>Additional information</Text>           
        <InfoList>
            <li>
                <InfoLink to='cast'>Cast</InfoLink>
            </li>
            <li>
                <InfoLink to='reviews'>Reviews</InfoLink>
            </li>
        </InfoList>
        </AdditionalInfo>  
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>  
    </>
    )
}

export default MovieDetails;
