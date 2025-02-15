// import axios from "axios";

import {  useEffect, useState } from "react";
import Carde from "../Components/Carde";
import "./Home.css"; 
import { axiosInstance } from "../Network/instace";
import { langContexte } from "../Context/Lang";
import { useContext} from "react";


// import { useDispatch, useSelector } from "react-redux";
// import {  addMovieThunk } from "../Thunk/action";  

function Home() {
  const [allmovie, setAllMovie] = useState([]);

  const [searche, setSearche] = useState("")

  const [page, setPage] = useState("1")

  const { langContext, } = useContext(langContexte);
  

  const curentPageP = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };


 const curentPageN = () => {
    setPage((prevPage) => prevPage + 1);
  };
 
  const search = (e)=>{
    console.log(e.target.value);
    
    setSearche(e.target.value)
    
    console.log(searche);

  }

  //  ((((((((((((((((((((((($$$$$$$$$$$$      THUNK       $$$$$$$)))))))))))))))))))))))

  // const dispatch = useDispatch(); 
  // const movies =  useSelector((state) => state.allMovieThunk);

  // console.log(movies);


  // useEffect(() => {
  //   dispatch(addMovieThunk());

  // }, []);
  
  // useEffect(() => {
  //   setAllMovie(movies); 
  // }, [movies]);
  

  //  ((((((((((((((((((((((($$$$$$$$$$$$      THUNK       $$$$$$$)))))))))))))))))))))))



// ########################################################################################
// ########################################################################################

  useEffect(() => {

    // https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&language=ar
    // https://api.themoviedb.org/3/search/movie?query=${searche}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false
      
        var completeURL = "";

        if (searche === "") {
          completeURL = `/movie/popular?page=${page}&language=${langContext}`; 
        } else {
          completeURL = `/search/movie?query=${searche}&page=${page}&language=${langContext}`; 
        }
  
        axiosInstance.get(completeURL)

        .then((data)=>{setAllMovie(data.data);
        // console.log(data.data);
  } ).catch((error)=>{       
        console.error("Error fetching movies:", error);
      }
    );
  }, [searche, page , langContext]);
  
  // ########################################################################################
  // ########################################################################################




  
  // ====================================
  // ====================================
  
  // useEffect(() => {
  //   if (searche === "") {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=a295c2fda0d44898d34830970fce7edc&page=${page}`
  //       )
  //       .then((data) => {
  //         setAllMovie(data.data);
  //         console.log(data.data);
  //       })
  //       .catch((errors) => {
  //         console.log("Error fetching data: " + errors);
  //       });
  //   } else {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/search/movie?query=${searche}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`
  //       )
  //       .then((data) => {
  //         setAllMovie(data.data);
  //         console.log(data.data);
  //       })
  //       .catch((errors) => {
  //         console.log("Error fetching data: " + errors);
  //       });
  //   }
  // }, [searche, page]);
  
  
// ====================================
// ====================================


  return (
    <>
    <div className="home">
      
      <div className="input-group mb-3 w-50  ">
  <input id="search" onChange={(e) => search(e)} type="text" className="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="button-addon2"/>

</div>

      
      
      <div className="movies-grid">

        {allmovie.results  &&
          allmovie.results.map((movie) => (
           
            <Carde
            
            key={movie.id}
            title={movie.title}
            poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            path={`/showmovie/${movie.id}`}
          
          />
          ))}
      </div>
    </div>
    
    {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}


     <nav id="pagenation" aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button onClick={curentPageP} className={`page-link ${page === 1 && "disabled" }`}>
              Previous
            </button>
          </li>
          <li className={`page-item ${page === 1 ? "active" : ""}`}>
            <button onClick={() => setPage(1)} className="page-link">
              1
            </button>
          </li>
          <li className={`page-item ${page === 2 ? "active" : ""}`}>
            <button onClick={() => setPage(2)} className="page-link">
              2
            </button>
          </li>
          <li className={`page-item ${page === 3 ? "active" : ""}`}>
            <button onClick={() => setPage(3)} className="page-link">
              3
            </button>
          </li>
          <li className="page-item">
            <button onClick={curentPageN} className={`page-link ${page === 3 && "disabled" }`}>
              Next
            </button>
          </li>
        </ul>
      </nav>


    </>
  );
}
export default Home;
