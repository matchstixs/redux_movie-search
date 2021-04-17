import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./components/slice/movieSlice";

export default configureStore({
  reducer: {
    // state: reducer function
    movie: movieReducer
  }
});