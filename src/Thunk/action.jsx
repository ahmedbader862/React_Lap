// import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// const initialState = {
//   allMovies: [] ,
// }



export const addMovieThunk = (data) => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&language=ar`
      )
      .then((response) => {
        dispatch ({
            type: "ADD_MOVIE",
            payload: response.data.results
            })
        console.log(response.data.results);
      })
      .catch((errors) => {
        console.log("???????????????" + errors);
      });
  };
};
            


// export const movieSlice = createSlice({
//     name: 'allMovies',
//     initialState,
//     reducers: {

//         getMovies: (state, action) => {
//             axios
//                   .get(
//                     `https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&language=ar`
//                   )
//                   .then((data) => {
//                     console.log(data.data);
//                   })
//                   .catch((errors) => {
//                     console.log("Error fetching data: " + errors);
//                   });
//               }
//         }

    
//   })
  
//   export const { getMovies } = movieSlice.actions
  
//   export default movieSlice.reducer
  