import React from "react";

function Tag(props) {
  return (
    <div
      className="bg-white dark:bg-dark-blue dark:text-white duration-200 shadow-md px-2 py-1 text-sm text-center rounded-md"
      style={{ minWidth: "100px" }}
    >
      {props.tag}
    </div>
  );
}

export default Tag;
