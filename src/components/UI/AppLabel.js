import React from "react";

export default function AppLabel({ forElement, text, className }) {
  const classes = className ? className : "";
  return (
    <label
      htmlFor={forElement}
      className={`uppercase text-sm text-gray-700 font-bold block ${classes}`}
    >
      {text}
    </label>
  );
}
