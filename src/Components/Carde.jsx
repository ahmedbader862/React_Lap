// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { addMovie } from "../redux/actions/FavAction";
// import { removeMovie } from "../redux/actions/FacRemove";
import { useSelector } from 'react-redux';
import './Carde.css';

function Carde(props) {

  const curentLange = useSelector((state) => state.movies.lange);
  const text = useSelector((state) => state.movies[curentLange]);

  // const dispatch = useDispatch();

  // const movies = useSelector((state) => state.addMovie);

  // //  const theme = useSelector((state) => state.theme);

  // const isMovieInFavorites = movies.some((movie) => movie.title === props.title);

  // const handleAddMovie = () => {
  //   console.log(props);

  //   dispatch(
  //     addMovie({
  //       title: props.title,
  //       poster_path: props.poster_path,
  //       path: props.path,
  //     })
  //   );
  // };

  // const handleRemoveMovie = () => {
  //   dispatch(removeMovie(props.title));
  // };

  // const handleToggleMovie = () => {
  //   if (isMovieInFavorites) {
  //     handleRemoveMovie();
  //   } else {
  //     handleAddMovie();
  //   }
  // };

  return (

    <>

<div className="card" style={{width:"300px"}}>
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={props.poster_path}
        alt="Placeholder "
      ></img>
    </figure>
  </div>

  <div className="card-content">
    <div className="media">

      <div className="media-left">
        <br />
        <br />
        <i className="fas fa-star text-warning me-2"></i>
      </div>

      <div className="media-content">
        <p className="title is-4">{props.title}</p>
      </div>
      
    </div>  
  </div>

  <footer class="card-footer">
    <button class="card-footer-item">
         {text.gomovie}
    </button>
    <button class="card-footer-item">
      <span> {text.addFav} </span>
    </button>
  </footer>

</div>
     

    </>
  );
}

export default Carde;
