
const INITIAL_VALUE = {
    allMovieThunk: [],
  };
  
  export default function ADD_MOVIES(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "ADD_MOVIE":
        return {
          ...state,
          allMovieThunk: action.payload,
        };
  
    //   case "REMOVE_MOVIE":return {
    //     ...state,
    //     addMovie: state.addMovie.filter((item) => item.title !== action.payload),
    //   };
  
  
      default:
        return state;
    }
  }
  