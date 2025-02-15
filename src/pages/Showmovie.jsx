import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MovieCarde from "../Components/movieCard";

function Showmovie(props) {
  const [Movie, setMovie] = useState([]);
const id = useParams().id;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
      )
      .then((data) => {
        setMovie(data.data);
        console.log(data.data);
      })
      .catch((errors) => {
        console.log("??????????????????????????" + errors);
      });
  }, [id]);

return (

  <>
  
<MovieCarde

title={Movie.title}
path={`https://image.tmdb.org/t/p/w185/${Movie.poster_path}`}
vote_average={Movie.vote_average}
release_date={Movie.release_date}
overview={Movie.overview}
/>

  </>
);
}

export default Showmovie;
