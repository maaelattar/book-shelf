import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksList } from "../redux/bookSlice";
import BooksList from "../components/BooksList";

export default function Home() {
  const { books } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);

  return <BooksList books={books} />;
}
