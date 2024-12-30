import React, { useContext } from "react";
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from '../components/templatesMovieListPage';
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";

const UpcomingMovies = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)
  const { mustWatch, addToMustWatch } = useContext(MoviesContext);

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

  const handleAddToPlaylist = (movieId) => {
    addToMustWatch(movieId); 
   // console.log("Updated Must Watch List:", mustWatch); 
  };
  
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist(movie.id)}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
      }}
    />
);
};
export default UpcomingMovies;