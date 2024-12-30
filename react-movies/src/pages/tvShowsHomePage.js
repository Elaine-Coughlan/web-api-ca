import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import ShowsList from "../components/tvshows/listComponent";
import Header from "../components/headerMovieList";
import Pagination from "../components/siteFooter";

const TVShowsHomePage = () => {
  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page 
  const [totalPages, setTotalPages] = useState(0);   // Total pages 

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`
    )
      .then((res) => res.json())
      .then((json) => {
        setShows(json.results);         
        setTotalPages(json.total_pages); 
      });
  }, [currentPage]); 

  
  const handlePageChange = (page) => {
    setCurrentPage(page); 
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={"TV Shows Page"} />
      </Grid>
      <Grid container>
        <ShowsList shows={shows} />
      </Grid>
      
      <Grid size={12} >
        <Pagination
          currentPage={currentPage}     
          totalPages={totalPages}       
          onPageChange={handlePageChange} 
        />
        
      </Grid>
    </Grid>
  );
};

export default TVShowsHomePage;
