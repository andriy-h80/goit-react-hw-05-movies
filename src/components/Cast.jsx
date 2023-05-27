// import { useState, useEffect } from "react";
// import { getMoviesCast } from '../../services/getAPI';
// import Loader from '../Loader/Loader';
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();

    // useEffect(() => {
    //     getMoviesCast()
    //
    // }, [])

    return <div>
        Cast: {movieId}
    </div>
}

export default Cast;
