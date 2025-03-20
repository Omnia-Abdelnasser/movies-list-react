import { useState } from "react";
import Movie from "./movie";
import MovieDetails from "./details";

const Movies = ({ movie }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (mov) => {
    setSelectedMovie(mov);
  };

  const handleBackToMovies = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={handleBackToMovies} />
      ) : (
        <div className="movies-container">
          {movie.length >= 1 ? (
            movie.map((mov) => (
              <Movie key={mov.id} mov={mov} handleMovieClick={handleMovieClick} />
            ))
          ) : (
            <h2 className="no-data">No data available, sorry</h2>
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
