import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (movie) => {
    let newFavourites = [];
    if (!favourites.includes(movie.id)){
      newFavourites = [...favourites, movie.id];
    }
    else{
      newFavourites = [...favourites];
    }
    setFavourites(newFavourites)
  };
  
  // We will use this function in the next step
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);


  const addToMustWatch = (movie) => {
    let newItem = [];
    if (!mustWatch.includes(movie.id)){
      newItem = [...mustWatch, movie.id];
    }
    else{
      newItem = [...mustWatch];
    }
    setMustWatch(newItem)
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;