import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie } from "../redux/actions/FavAction";
import { removeMovie } from "../redux/actions/FacRemove";
import './Carde.css';

function Carde(props) {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.allMovie);

  //  const theme = useSelector((state) => state.theme);

  const isMovieInFavorites = movies.some((movie) => movie.title === props.title);

  const handleAddMovie = () => {
    console.log(props);
    
    dispatch(
      addMovie({
        title: props.title,
        poster_path: props.poster_path,
        path: props.path,
      })
    );
  };

  const handleRemoveMovie = () => {
    dispatch(removeMovie(props.title));
  };

  const handleToggleMovie = () => {
    if (isMovieInFavorites) {
      handleRemoveMovie();
    } else {
      handleAddMovie();
    }
  };

  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img
        src={props.poster_path}
        className="card-img-top"
        alt={props.title}
        style={{ height: "230px", objectFit: "" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>

<div className="d-flex justify-content-between">
<Link to={props.path} className="btn btn-primary ">
          Go to movie
        </Link>

        <button className="btn bg-danger " onClick={handleToggleMovie}>
          {isMovieInFavorites ? "Remove Movie" : "Add Movie"}
        </button>
</div>

      </div>
    </div>
  );
}

export default Carde;
