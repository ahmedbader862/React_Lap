function MovieCarde(props) {
    return (
      <>
      <br />
      <br />
      <br />
        <div className="movie-card mb-4 shadow-lg rounded">
          <div id="card" className="row bg-light ">
            {/* Image Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 cardImage">
              <img
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "10px",
                  objectFit: "contain" ,
                }}
                src={props.path}
                alt={props.title}
                className="img-fluid imm"
              />
            </div>
  
            {/* Content Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 px-5 py-3 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h1 className="me-3 text-primary">{props.title}</h1>
                <h3 className="rate d-flex align-items-center text-secondary">
                  <i className="fas fa-star text-warning me-2"></i>
                  {props.vote_average}/10
                </h3>
              </div>
              <p className="text-muted">{props.overview}</p>
              <p className="date fw-bold text-dark">
                <span className="fst-normal">Release Date:</span> {props.release_date}
              </p>
  
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary btn-lg shadow-sm px-4">
                  <i className="fas fa-play-circle me-2"></i> Watch Now
                </button>
                <button className="btn btn-danger btn-lg shadow-sm px-4">
                  <i className="fas fa-download me-2"></i> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default MovieCarde;
  