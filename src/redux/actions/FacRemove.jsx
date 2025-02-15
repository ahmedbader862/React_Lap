

  export const removeMovie = (title) => {
    return {
        type: "REMOVE_MOVIE",
        payload: title,
    };
};