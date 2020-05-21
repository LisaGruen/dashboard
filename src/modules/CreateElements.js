import React from "react";

const CreateElements = (count, elementClass) => {
  return [...Array(count)].map((e, i) => (
    <div key={i} className={`${elementClass} ${elementClass}${i}`}></div>
  ));
};

export default CreateElements;
