import bookReducer from "./bookSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: bookReducer });
