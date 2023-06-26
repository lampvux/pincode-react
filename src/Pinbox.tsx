import React, { useEffect, useRef, useState } from "react";
import { PinBoxTypeParams } from "./types";

export default function PinBox({
  secretMode = false,
  regexChecker,
  code,
  index,
  results,
  handleResult,
}: PinBoxTypeParams) {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputCode(value: string) {
    const regex = new RegExp(`${regexChecker}`);
    const nextValue = [...results];
    // test regex value
    if (regex.test(value)) {
      setValue(value);

      // focus to next input field if input more than 1 character
      if (value.length >= 1) {
        setValue(value[value.length - 1]);

        nextValue[index] = value;

        handleResult(nextValue);

        // focus to next input field
        let nextSibling = inputRef.current?.nextElementSibling;
        if (nextValue && nextSibling instanceof HTMLInputElement) {
          nextSibling.focus();
        }
      }
    } else {
      setValue("");
    }
  }

  function handleCheckPinCode(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    handleInputCode(value);
  }

  useEffect(() => {
    // add paste event listener to the first input field
    if (index === 0) {
      inputRef.current?.addEventListener("paste", (e) => {
        e.preventDefault();
        const pasteText = e.clipboardData?.getData("text") ?? "";
        pasteText.split("").forEach((e) => handleInputCode(e));
      });
    }
  }, []);

  return (
    <input
      ref={inputRef}
      autoFocus={index === 0}
      type={secretMode ? "password" : "text"}
      data-type="code"
      max-length="1"
      className="code"
      data-code={code}
      value={value}
      onChange={handleCheckPinCode}
    />
  );
}
