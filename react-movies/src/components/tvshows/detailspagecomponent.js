import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ShowDetailsPage = ( props) => {
  const show = props.show

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>
        <Paper  component="ul" 
        sx={{...root}}>
            <Chip label={`Original Name: ${show.original_name}`}></Chip>
        </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count})`}
        />
        <Chip label={`First Air Date: ${show.first_air_date}`} />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        sx={{
            position: "fixed",
            bottom: 2,
            right: 2
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      </>
  );
};
export default ShowDetailsPage ;