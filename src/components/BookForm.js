import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrUpdateBook,
  handleChange,
  cleanBook,
  getBookById,
} from "../redux/bookSlice";
import { useHistory, useParams, Link } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import AppTitle from "./UI/AppTitle";
import AppLabel from "./UI/AppLabel";

export default function BookForm() {
  const { currentBook: book } = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();
  function onChange(e) {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createOrUpdateBook({ id, book }))
      .then(unwrapResult)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getBookById(id));
    }
  }, [dispatch, id]);

  const isCreate = id ? false : true;
  useEffect(() => {
    return () => {
      dispatch(cleanBook());
    };
  }, [dispatch]);
  return (
    <div>
      <AppTitle
        text={isCreate ? "create new book" : "edit book"}
        className="text-center my-4"
      />
      <form onSubmit={onSubmit} className="w-3/5 mx-auto">
        <div className="pb-4 ">
          <AppLabel forElement="title" text="title" />
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            value={book.title}
            onChange={onChange}
          />
        </div>
        <div className="pb-4">
          <AppLabel forElement="isbn" text="isbn" />
          <input
            type="text"
            id="isbn"
            name="isbn"
            className="form-input"
            value={book.isbn}
            onChange={onChange}
          />
        </div>
        <div>
          <AppLabel forElement="author" text="author" />
          <input
            type="text"
            id="author"
            name="author"
            className="form-input"
            value={book.author}
            onChange={onChange}
          />
        </div>
        <div>
          <AppLabel forElement="description" text="description" />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            className="form-input"
            value={book.description}
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <AppLabel forElement="published_date" text="published date" />
          <input
            type="date"
            id="published_date"
            name="published_date"
            className="form-input"
            value={book.published_date || ""}
            onChange={onChange}
          />
        </div>
        <div>
          <AppLabel forElement="publisher" text="publisher" />
          <input
            type="text"
            id="publisher"
            name="publisher"
            className="form-input"
            value={book.publisher}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white uppercase text-sm font-bold py-3 my-5 hover:bg-blue-700 focus:outline-none"
        >
          {isCreate ? "submit" : "update"}
        </button>
      </form>
    </div>
  );
}
