import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    if (retry > 0) {
      const timer = setTimeout(() => {
        fetchMovies();
      }, 2000);
      return () => clearTimeout(timer);
    }
  });

  async function fetchMovies() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setRetry(true);
    } catch (error) {
      if (retry < 3) {
        setRetry(retry + 1);
      } else {
        setError(error.message);
        setRetry(0);
      }
    }
    setIsLoading(false);
  }

  function handleCancelRetry() {
    setRetry(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && (
          <div>
            <p>{error}</p>
            <button onClick={handleCancelRetry}>Cancel</button>
          </div>
        )}
        {isLoading && <p>Loading......</p>}
      </section>
    </React.Fragment>
  );
};

export default App;
