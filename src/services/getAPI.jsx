import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `58645e23389326a2e8ed75695b9e1b79`,

};

export const getTrendingMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Oops, there is no movies");
  }
};

export const getMoviesByQuery = async (query, page = 1) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: {
        query,
        page,
        include_adult: false,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Oops, there is no movie with that name");
  }
};

export const getMoviesDetailsById = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        id: movieId,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Oops, there is no movie with that name");
  }
};

export const getMoviesCast = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        id: movieId,
      },
    });
    return data.cast;
  } catch (error) {
    throw new Error("Oops, there is no cast movie");
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        id: movieId,
      },
    });
    return data.results;
  } catch (error) {
    throw new Error("We don't have any reviews for this movie");
  }
};

export const getGenresMovies = async () => {
  try {
    const { data } = await axios.get(`genre/movie/list`);
    return data.genres;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};
