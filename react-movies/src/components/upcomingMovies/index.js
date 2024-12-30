import React from "react";

const upcomingMovies = (props) => {
    let movieCards = props.movies.upcoming.map((m) => (
      <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
        <Movie key={m.id} movie={m} action={props.action} />
      </Grid>
    ));
    return movieCards;
  };

export default upcomingMovies;