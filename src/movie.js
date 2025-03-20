const Movie = ({ mov, handleMovieClick }) => {
    return (
      <div className="card" style={{ width: "200px", margin: "10px" }}>
        <img src={mov.image?.medium} className="card-img-top" alt={mov.title} />
        <div className="card-body">
      
          <h5 className="card-title" style={{textAlign:'center'}}>{mov.name}</h5>
          <button className="btn btn-primary" onClick={()=>handleMovieClick(mov)} style={{width:'100%'}}>
            More
          </button>
        </div>
      </div>
    );
  };
  
  export default Movie;