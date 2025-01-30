const Movie = ({ mov, handleMovieClick }) => {
    return (
      <div className="card" style={{ width: "200px", margin: "10px" }}>
        <img src={mov.image?.medium} className="card-img-top" alt={mov.title} />
        <div className="card-body">
          <h5 className="card-title">{mov.title}</h5>
          <button className="btn btn-primary" onClick={()=>handleMovieClick(mov)}>
            More
          </button>
        </div>
      </div>
    );
  };
  
  export default Movie;