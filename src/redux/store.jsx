import {  configureStore } from '@reduxjs/toolkit'
import langeSlice from './toolkit'
// import { movieSlice } from './thunk'
// import { thunk } from 'redux-thunk'

export const store = configureStore({
  reducer: { 
    movies: langeSlice,
    // allMovies : movieSlice
 }, 
//  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
