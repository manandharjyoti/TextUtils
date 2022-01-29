import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleUpClick1 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    let newtext = document.getElementById("myBox");

    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Copied to clipboard", "primary");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "danger");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  //   setText("HELLO HELLO");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick1}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to Clickboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "dark" }}
      >
        <h1> Your Text Summary</h1>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters */}
          {text.trim().length === 0
            ? 0
            : text.trim().replace(/\s+/g, " ").split(" ").length}
          words
          {text.replace(/\s/g, "").length}characters
          <p>
            {0.008 *
              (text.trim().length === 0
                ? 0
                : text.trim().replace(/\s+/g, " ").split(" ").length)}
            minutes to read
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </p>
      </div>
    </>
  );
}
