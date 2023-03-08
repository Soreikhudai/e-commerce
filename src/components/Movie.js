import React from "react";
import { app } from "../firebase";
import "firebase/database";
import { getDatabase, ref, remove } from "firebase/database";
import classes from "./Movie.module.css";

const Movie = (props) => {
  const removeMovieHandler = () => {
    const database = getDatabase(app);
    const dataRef = ref(database, `movies/${props.id}`);

    remove(dataRef)
      .then(() => {
        console.log(`Data with ID ${props.id} removed successfully`);
      })
      .catch((error) => {
        console.log(`Error removing data with Id ${props.id}:`, error);
      });
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={removeMovieHandler}>Delete Movie</button>
    </li>
  );
};

export default Movie;
