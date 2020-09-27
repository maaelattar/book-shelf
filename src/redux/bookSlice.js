import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBooks,
  deleteBook,
  getBook,
  updateBook,
  createBook,
} from "../booksAPI";

export const getBooksList = createAsyncThunk(
  "books/getBooksStatus",
  async () => {
    const response = await getBooks();
    return response.data;
  }
);

export const createOrUpdateBook = createAsyncThunk(
  "books/createOrUpdateStatus",
  async (data) => {
    if (data.id) {
      await updateBook(data.id, data.book);
    } else {
      await createBook(data.book);
    }
  }
);

export const getBookById = createAsyncThunk(
  "books/getByIdStatus",
  async (id) => {
    const response = await getBook(id);
    return response.data;
  }
);

export const deleteBookById = createAsyncThunk(
  "books/createStatus",
  async (id) => {
    await deleteBook(id);
  }
);

const initialState = {
  books: [],
  currentBook: {
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  },
  loading: false,
  error: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    handleChange(state, action) {
      state.currentBook[action.payload.name] = action.payload.value;
    },
    cleanBook(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: {
    [getBooksList.pending]: (state) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    [getBooksList.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = "";
        state.books = [...action.payload];
      }
    },
    [getBooksList.rejected]: (state, action) => {
      if (state.loading === true) {
        state.books = [];
        state.loading = false;
        state.error = action.error;
      }
    },
    [createOrUpdateBook.pending]: (state) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    [createOrUpdateBook.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = "";
      }
    },
    [createOrUpdateBook.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.error;
      }
    },
    [getBookById.pending]: (state) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    [getBookById.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = "";
        state.currentBook = action.payload;
      }
    },
    [getBookById.rejected]: (state, action) => {
      if (state.loading === true) {
        state.books = [];
        state.loading = false;
        state.error = action.error;
      }
    },

    [deleteBookById.pending]: (state) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    [deleteBookById.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = "";
      }
    },
    [deleteBookById.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const { handleChange, cleanBook } = bookSlice.actions;

export default bookSlice.reducer;
