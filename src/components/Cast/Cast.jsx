import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from '../../services/getAPI';
import Loader from '../Loader/Loader';
import ErrorImageView from '../ErrorImageView/ErrorImageView';
import NoActor from '../Image/no-actor.png';
import { ActorsCharacter, ActorsName, CastItem, CastList, CastPhoto, CastPhotoThumb, MovieHero, Wrap } from './Cast.styled';

const Cast = () => {
    const { movieId } = useParams();
    const [castList, setCastList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
          try {
            setIsLoading(true);
            setError(false);
            const data = await getMoviesCast(movieId);
            setCastList(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
        })();
      }, [movieId]);
    

    return (
        <>
        {isLoading && <Loader />}
        {error && <ErrorImageView message="Oops, mistake... Please try again" />}    
        {castList.length > 0 && (
        <CastList>
          {castList.map(actor => (
              <CastItem key={actor.id}>
                <CastPhotoThumb>
                  <CastPhoto
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                        : NoActor
                    }
                    alt={actor.name}
                    width="120"
                  />
                </CastPhotoThumb>

                <Wrap>
                  <ActorsName>{actor.name}</ActorsName>
                  {actor.character && (
                    <ActorsCharacter>
                        <MovieHero>{actor.character}</MovieHero>
                    </ActorsCharacter>
                  )}
                </Wrap>
              </CastItem>
          ))}
        </CastList>
        )}
        </>
    )
}

export default Cast;
