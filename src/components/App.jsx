import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Home from './Pages/HomePage/HomePage';
// import Movies from './Pages/MoviesPage';
// import MovieDetails from './Pages/MovieDetailsPage';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Home = lazy(() => import('./Pages/HomePage/HomePage'));
const Movies = lazy(() => import('./Pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./Pages/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>          
      </Route>
    </Routes>
  
  );
};
