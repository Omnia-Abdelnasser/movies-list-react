const MovieDetails = ({ movie, onBack }) => {
    if (!movie) return null; 
  
    return (
      <div className="modal-overlay" >
        <div className="modal-content">
          <img src={movie.image?.medium} className="modal-img" alt={movie.name} style={{width:'200px'}} />
          <h5>{movie.name}</h5>
          <p>{movie.summary}</p>
          <button className="btn btn-danger" onClick={onBack} style={{width:'300px'}}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default MovieDetails;