import { useSelector } from "react-redux";
import Carde from "../Components/Carde";
import  "../pages/Fav.css";

function FavList() {
  const movies = useSelector((state) => state.allMovie ); 

  return (
    <>
    <h1 className="favtitle">Favorite Movies</h1>
    <div className="fav">
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
       movies.map((movie) => (
        <Carde
        key={movie.id}
        title={movie.title}
        poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        path={`/showmovie/${movie.id}`}
      
      />
        ))
      )}
    </div>
    </>
  );
}

export default FavList;
