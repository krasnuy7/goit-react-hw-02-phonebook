import React from "react";

const Filter = (props) => {
  console.log(props);
  return (
    <>
      <input
        name="filter"
        placeholder="seach"
        input="text"
        value={props.filter}
        onChange={props.handleChange}
      />
    </>
  );
};

export default Filter;
