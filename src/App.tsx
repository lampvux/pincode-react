import React, { useState } from "react";
import "./App.css";
import Pincode from "./Pincode";

function App() {
  const [pinCode, setPinCode] = useState("12345");
  const [regexChecker, setRegexChecker] = useState("[0-9]");
  const [results, setResults] = useState<string[]>([]);
  const [secretMode, setSecretMode] = useState(false);

  function handleRegexCheck(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const { value } = e.currentTarget;
      new RegExp(value);
      setRegexChecker(value);
    } catch (error) {
      alert("Invalid Regex");
    }
  }
  function handleCheckInput(result: string[]) {
    setResults(result);

    if (result.join("") === pinCode) {
      alert("Correct Pincode");
    }
  }
  function handleSecretMode(e: React.ChangeEvent<HTMLInputElement>) {
    setSecretMode(e.currentTarget.checked);
  }

  return (
    <div className="App">
      <div className="options">
        <div className="option-field">
          <label>Pin Code:</label>
          <input
            type="text"
            value={pinCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPinCode(e.currentTarget.value)
            }
          />
        </div>
        <div className="option-field">
          <label>Regex Checker:</label>
          <input type="text" value={regexChecker} onChange={handleRegexCheck} />
        </div>
        <div className="option-field">
          <label>Secret Mode:</label>
          <input
            type="checkbox"
            onChange={handleSecretMode}
            checked={secretMode}
          />
        </div>
      </div>

      <Pincode
        secretMode={secretMode}
        pinCode={pinCode}
        regexChecker={regexChecker}
        handleResult={handleCheckInput}
        results={results}
      />
    </div>
  );
}

export default App;
