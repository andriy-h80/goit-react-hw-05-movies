import { useState, useEffect } from "react";
import { getTrendingMovies } from '../../services/getAPI';
// import Loader from '../Loader/Loader';

const Home = () => {
    const [movies, setMovies] = useState();


    useEffect(() => { 
        const trendingMovies = async () => {
      
            const data = await getTrendingMovies();
          
            console.log(data);
            setMovies(data);
        
        };
    
        trendingMovies();
      }, []);

    return <div>Trending today</div>
};

export default Home;