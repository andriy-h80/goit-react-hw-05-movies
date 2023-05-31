import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from '../../services/getAPI';
import Loader from '../Loader/Loader';
import ErrorImageView from '../ErrorImageView/ErrorImageView';
import { ReviewsList, ReviewItem, ReviewsAuthor, ReviewContent, NoReviewsMessage } from './Reviews.styled';

const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
          try {
            setIsLoading(true);
            setError(false);
            const data = await getMoviesReviews(movieId);
            setMovieReviews(data);
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
        {error && <ErrorImageView title="Oops, mistake... Please try again" />}
        
        {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(review => (
            <ReviewItem key={review.id}>
                <ReviewsAuthor>{review.author}</ReviewsAuthor>
                <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
        ) : (
          <NoReviewsMessage>We don't have any reviews for this movie</NoReviewsMessage>
        )}
        </>
    )    
}

export default Reviews;
