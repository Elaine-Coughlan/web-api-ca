import React, {useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ShowDetailsPage from "../components/tvshows/detailspagecomponent";

const ShowPage = (props) => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((show) => {
          setShow(show);
        });
    }, [id]);
  
    useEffect(() => {
      fetch(
       `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
     
        .then((res) => res.json())
        .then((json) => json.posters)
        .then((images) => {
          setImages(images);
        });
    }, []);


  return (
    <>
      {show ? (
        <>
          <Header title ={show.name} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid size={{xs: 3}}>
              <div sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}>
                <ImageList
                  sx={{
                    height: "100vh",
                  }}
                  cols={1}
                >
                  {images.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      cols={1}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.file_path}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid size={{xs: 9}}>
              <ShowDetailsPage show={show} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default ShowPage;