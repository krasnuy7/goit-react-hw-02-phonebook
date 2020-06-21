import React from "react";

const Filter = (props) => {
  return (
    <>
      <input
        name="filter"
        placeholder="seach"
        input="text"
        onChange={props.handleChange}
      />
    </>
  );
};

export default Filter;
