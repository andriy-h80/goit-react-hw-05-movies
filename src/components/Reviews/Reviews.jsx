// import { useState, useEffect } from "react";
// import { getMoviesReviews } from '../../services/getAPI';
// import Loader from '../Loader/Loader';
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();

    // useEffect(() => {
    //     getMoviesReviews()
    //     
    // }, [])

    return <div>
        Reviews: {movieId}
    </div>
}

export default Reviews;
