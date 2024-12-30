import React from "react";
import Show from ".//cardcomponent"
import Grid from "@mui/material/Grid2";

const ShowsList = (props) => {
  let showCards = props.shows.map((s) => (
    <Grid key={s.id}  size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Show key={s.id} show={s} />
    </Grid>
  ));
  return showCards;
};

export default ShowsList;