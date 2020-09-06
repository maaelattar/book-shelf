import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookById, getBookById, cleanBook } from "../redux/bookSlice";
import AppTitle from "./UI/AppTitle";

export default function BookDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBookById(id));
  }, [dispatch, id]);
  const { currentBook: book } = useSelector((state) => state);
  useEffect(() => {
    return () => {
      dispatch(cleanBook());
    };
  }, [dispatch]);
  async function onDeleteClick() {
    dispatch(deleteBookById(id)).then(() => {
      history.push("/");
    });
  }

  return (
    <>
      {!book._id && (
        <AppTitle text="No book details to display" className="text-center" />
      )}
      {book._id && (
        <div className="flex flex-row flex-wrap  m-auto">
          <div className="w-1/3">
            <img
              src="https://www.smacna.org/images/default-source/book-store-img/covers/book-cover-generic.png?sfvrsn=72a8f0a5_2"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-evenly text-gray-800 capitalize w-2/3">
            <h2 className="text-lg font-bold ">{book.title}</h2>
            <p className="font-semibold  ">
              <span className="font-bold">ISBN:</span> {book.isbn}
            </p>
            <p className="font-semibold  ">
              <span className="font-bold">Author:</span> {book.author}
            </p>
            <p className="font-semibold  ">
              <span className="font-bold">Description:</span> {book.description}
            </p>
            <p className="font-semibold  ">
              <span className="font-bold">Published in:</span>{" "}
              {book.published_date}
            </p>
            <p className="font-semibold  ">
              <span className="font-bold">Publisher:</span> {book.publisher}
            </p>
          </div>
          <div className="w-full flex flex-row justify-evenly pt-12">
            <button
              onClick={onDeleteClick}
              className="w-1/3 bg-red-600 text-white uppercase text-sm font-bold py-3 my-5 hover:bg-red-700 focus:outline-none rounded"
            >
              Delete
            </button>
            <Link
              to={`/books/edit/${id}`}
              className="w-1/3 bg-blue-600 text-white uppercase text-sm font-bold py-3 my-5 hover:bg-blue-700 focus:outline-none text-center rounded"
            >
              Edit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
