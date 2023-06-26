import React from "react";
import { PincodeParams } from "./types";
import PinBox from "./Pinbox";

export default function Pincode({
  secretMode = false,
  pinCode = "12345",
  regexChecker = "[0-9]",
  handleResult,
  results,
}: PincodeParams) {
  return (
    <div className="pincode-wrapper">
      <div className="pincode-data">
        {pinCode.length ? (
          pinCode
            .split("")
            .map((e, index) => (
              <PinBox
                secretMode={secretMode}
                regexChecker={regexChecker}
                code={e}
                key={index}
                index={index}
                results={results}
                handleResult={handleResult}
              />
            ))
        ) : (
          <div>Invalid Pin Length</div>
        )}
      </div>
    </div>
  );
}
