import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templatesMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PopularityIcon from '@mui/icons-material/ArrowUpward'

const TrendingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favorite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="What's trending"
      movies={movies}
      action={(movie) => {
        return <PopularityIcon>
          
        </PopularityIcon>
      }}
    />
);

};
export default TrendingPage;