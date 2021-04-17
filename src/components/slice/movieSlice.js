import { createSlice } from "@reduxjs/toolkit";

// store global state
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  movies: []
};

const movieSlice = createSlice({
  // action name used in "action types"
  name: "movies",
  initialState,
  reducers: {
    setMovie: (state, action) => ({
      ...state,
      movies: action.payload
    })
  }
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;