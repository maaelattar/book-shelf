import bookReducer from "./bookSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({
//   books: bookReducer,
// });
// export const store = configureStore({ reducer: rootReducer });
export const store = configureStore({ reducer: bookReducer });
