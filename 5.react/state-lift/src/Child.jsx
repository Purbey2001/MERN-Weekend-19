import React from "react";

const Child = (props) => {
  console.log(props);

  const handleChange = (e) => {
    props.setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your username"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Child;
