import React from "react";

export default function AppTitle({ text, className }) {
  const classes = className ? className : "";
  return (
    <div>
      <h1
        className={`font-semibold text-2xl tracking-wide capitalize mb-2 ${classes}`}
      >
        {text}
      </h1>
    </div>
  );
}
