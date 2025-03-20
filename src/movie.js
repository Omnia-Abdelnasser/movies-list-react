const Movie = ({ mov, handleMovieClick }) => {
  return (
    <div className="movie-card" >
      <img src={mov.image?.medium} className="movie-img" alt={mov.name} />
      <div className="movie-body">
        <h5 className="movie-title">{mov.name}</h5>
        <button className="movie-btn" onClick={() => handleMovieClick(mov)}>More</button>
      </div>
    </div>
  );
};

export default Movie;
