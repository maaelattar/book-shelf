import React from "react";
import { Link } from "react-router-dom";

export default function Book({
  _id,
  title,
  isbn,
  author,
  description,
  published_date,
  publisher,
}) {
  return (
    <Link
      to={`/books/show/${_id}`}
      className="block items-center border max-w-sm shadow-lg rounded pb-4 break-all hover:shadow-2xl transition duration-500"
    >
      <img
        src="https://www.smacna.org/images/default-source/book-store-img/covers/book-cover-generic.png?sfvrsn=72a8f0a5_2"
        className="w-full h-64"
        alt=""
      />

      <h2 className="text-xl font-semibold tracking-wider text-blue-600 capitalize px-8 truncate text-center">
        {title}
      </h2>
      <h3 className="text-lg tracking-wider text-gray-600 text-center">
        {author}
      </h3>
    </Link>
  );
}
