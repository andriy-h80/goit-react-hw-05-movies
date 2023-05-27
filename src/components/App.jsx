import Home from './Pages/HomePage';
import Movies from './Pages/MoviesPage';
import MovieDetails from './Pages/MovieDetailsPage';
import Cast from './Cast';
import Reviews from './Reviews';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';


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
