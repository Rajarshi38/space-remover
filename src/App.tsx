import { useState } from "react";
import { Button } from "react-bootstrap";
import removeSpaces from "./utils/spaceRemover";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [leading, setLeading] = useState(true);
  const [trailing, setTrailing] = useState(true);
  const [preserveIndent, setPreserveIndent] = useState(true);
  const inputHandler = (event: any) => {
    setInput(event.target.value);
  };

  const pasteInput = async () => {
    setInput(await navigator.clipboard.readText());
  };
  const leadingSpacesChange = (event: any) => {
    setLeading(event.target.checked);
  };

  const trailingHandler = (event: any) => {
    setTrailing(event.target.checked);
  };

  const handlePreserveIndent = (event: any) => {
    setPreserveIndent(event.target.checked);
  };

  const handleRemoveSpaces = () => {
    setOutput(removeSpaces({ text: input, leading, trailing, preserveIndent }));
  };

  return (
    <div className="main__container">
      <div className="d-flex gap-4 mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={leading}
            onChange={leadingSpacesChange}
          />
          <label className="form-check-label">Remove leading spaces</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={preserveIndent}
            onChange={handlePreserveIndent}
          />
          <label className="form-check-label">Preserve Indent</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={trailing}
            onChange={trailingHandler}
          />
          <label className="form-check-label">Remove trailing spaces</label>
        </div>
      </div>
      <div className="button__container d-flex gap-2">
        <Button
          variant="outline-primary"
          className="d-flex flex-row gap-1"
          onClick={pasteInput}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clipboard"
            viewBox="0 0 16 16"
          >
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
          <span className="button__text">Copy from clipboard</span>
        </Button>
        <Button
          variant="outline-primary"
          className="d-flex gap-1"
          onClick={handleRemoveSpaces}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
          </svg>
          <span className="button__text">Remove spaces</span>
        </Button>
      </div>
      <div className="box__container">
        <div className="input__box">
          <h6>Input</h6>
          <textarea
            className="textarea"
            value={input}
            onChange={inputHandler}
          />
        </div>
        <div className="output__box">
          <h6>Output</h6>
          <textarea className="textarea" value={output} readOnly />
        </div>
      </div>
    </div>
  );
};

export default App;
import React from "react";
