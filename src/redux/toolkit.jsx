import { createSlice } from "@reduxjs/toolkit"
import english from "./english"
import arabic from "./arabic"
// import axios from "axios"

const initialState = {
  lange: 'en',
  en: english,
  ar:arabic ,
  // allMovie : []
}




export const langeSlice = createSlice({
    name: 'langeSlice',
    initialState,
    reducers: {

      changeEn: (state, action) => { state.lange = action.payload },

      // getMovies: (state, action) => {
      //               axios
      //                     .get(
      //                       `https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&language=ar`
      //                     )
      //                     .then((data) => {
      //                       console.log(data.data);
      //                     })
      //                     .catch((errors) => {
      //                       console.log("Error fetching data: " + errors);
      //                     });
                      
                



      // },
      

    },
  })
  
  
  export const { changeEn, } = langeSlice.actions
  
  export default langeSlice.reducer
  