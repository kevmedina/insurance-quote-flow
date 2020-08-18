import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/rootReducer";

const store = configureStore({
  rootReducer,
});

export default store;
