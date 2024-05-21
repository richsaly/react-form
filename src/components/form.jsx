import React from "react";

const form = ({ labelValue, inputType, onChange }) => {
  return (
    <form>
      <label>{labelValue}</label>
      <input type={inputType} onChange={onChange}></input>
    </form>
  );
};

export default form;
