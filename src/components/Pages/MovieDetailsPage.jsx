import { useRef, useState, useEffect } from "react";
// import { getMoviesDetailsById } from '../../services/getAPI';
// import Loader from '../Loader/Loader';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Title } from '../Title/Title';

const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    const { movieId } = useParams();

    // useEffect(() => {
    //     getMoviesDetailsById()
    //    
    // }, [])

    return (
    <>
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
        <Outlet />
    </>
    )
}

export default MovieDetails;
