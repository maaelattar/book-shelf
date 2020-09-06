import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

export default function BooksList({ books }) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
      {books.map((book) => (
        <Book key={book._id} {...book} />
      ))}
    </div>
  );
}
