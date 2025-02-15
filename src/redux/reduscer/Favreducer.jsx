
const INITIAL_VALUE = {
  allMovie: [],
};

export default function ADD_MOVIES(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        allMovie: [...state.allMovie, action.payload], 
      };

    case "REMOVE_MOVIE":return {
      ...state,
      allMovie: state.allMovie.filter((item) => item.title !== action.payload),
    };


    default:
      return state;
  }
}
