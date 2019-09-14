import React from "react";

const Field = () => {

  const inputStyle = {
    height: "100%",
    fontSize: "16px",
    border: "solid 1px #dbdbdb",
    borderRadius: "3px",
    color: "#262626",
    borderRadius: "3px",
    color: "#999",
    cursor: "text",
    fontSize: "14px",
    fontWeight: "300",
    background: "#fafafa",
    textAlign: "left",
    outline: "0",
    padding: "7px 33px"
  };

  return (
    <>
      <input
        style={inputStyle}
      />
    </>
  );
};

export default Field;