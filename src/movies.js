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
        <div className="row">
          {movie.length >= 1 ? (
            movie.map((mov) => (
              <div
                className="col-md-4 py-3 py-md-0"
                key={mov.id}
                style={{ cursor: "pointer" }}
              >
                <Movie mov={mov} handleMovieClick={handleMovieClick} />
              </div>
            ))
          ) : (
            <h2>No data available sorry</h2>
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
