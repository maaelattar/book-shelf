import React from "react";
import Book from "./Book";

export default function BooksList({ books }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4">
      {books.map((book) => (
        <Book key={book._id} {...book} />
      ))}
    </div>
  );
}
