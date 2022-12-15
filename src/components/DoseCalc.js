import { useEffect, useState } from 'react';

import "../styles/DoseCalcDiv.scss";

export default function DoseCalc({ inputLabel, outputLabel, doseIO, bgOutput, colorOutput, colWidth, ariaLabel }) {
  // state for index of dose selected
  const [ dose, setDose ] = useState(0);

  const inputs = Object.keys(doseIO);
  const inputIds = inputs.map((input, index) => `tab-${index}`);
  const output = Object.values(doseIO);

  function doseChange(e) {
    const index = Number(e.target.id.split("-")[1]);
    setDose(index);
  };

  // set width classes
  const leftColWidth = colWidth ? `width-${colWidth}p` : `width-33p`;
  const rightColWidth = colWidth ? `width-${(100 - colWidth)}p` : `width-66p`;

  useEffect(() => {

    function handleKeyDown(event) {
      // if the focus is not on the tabs, or if we use Tab to change focus, then return
      if (!inputIds.includes(document.activeElement.id) || event.key === "Tab") {
        return;
      }

      // if we know the focus is on the tabs then prevent page scroll with up/down arrows
      event.preventDefault();

      const currentFocusElementIndex = Number(document.activeElement.id.split("-")[1]);

      switch (event.key) {
        case ("ArrowUp"):
          if (currentFocusElementIndex === 0) {
            document.getElementById(inputIds[inputIds.length - 1]).focus();
          } else {
            document.getElementById(`tab-${currentFocusElementIndex - 1}`).focus();
          };
          break;
        case ("ArrowDown"):
          if (currentFocusElementIndex === inputIds.length - 1) {
            document.getElementById(inputIds[0]).focus();
          } else {
            document.getElementById(`tab-${currentFocusElementIndex + 1}`).focus();
          }
          break;
        case ("Enter"):
          document.getElementById(`tab-${currentFocusElementIndex}`).click();
          break;
        default: 
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Clean up event listener to remove side effects
    return () => document.removeEventListener("keydown", handleKeyDown);

  }, [inputIds]);
  
  return (
    <div className="DoseCalc">
      <div className="table-headings">
        <h4 className={`${leftColWidth} label`}>
          {inputLabel}
        </h4>
        <h4 className={`${rightColWidth} label`}>
          {outputLabel}
        </h4>
      </div>

      <div className="table-data">
        <div role="tablist" aria-labelledby={ariaLabel} className={`${leftColWidth}`}>
          {inputs.map((input, index) => {
            // class name for background-color
            const bg = doseIO[input].bgColor;
            // class name for font color
            const color = doseIO[input].fontColor;
            const array = bg.split("-");
            // color for the triangle div that points to the next column
            const pointColor = array[array.length - 1];
            
            return (
              <div className={dose === index ? `input-dose selected ${bg}` : `input-dose not-selected`} key={`input dose: ${index}`}>
                <button 
                  role="tab"
                  type="button"
                  aria-selected={dose === index}
                  aria-controls={`tabpanel-${index}`}
                  id={`tab-${index}`}
                  onClick={doseChange}>
                    {/* Ensure screen readers say the "column" heading but is not visible */}
                    <span className="sr-only">{inputLabel}</span>
                    {/* Visible number of input mg as the tab will be element of focus */}
                    <span id={`span-${index}`} className={dose !== index ? `${color} focus` : `focus`}>{input}</span>
                </button>
                <div className={`right-pointer ${pointColor}`}></div>
              </div>
            )
          })}
        </div>
        {inputs.map((input, index) => {
            return (
              <div
                key={`output dose result: ${index}`}
                className={dose === index ? `output-cell ${bgOutput} ${colorOutput} ${rightColWidth}` : `is-hidden`} 
                id={`tabpanel-${index}`} 
                role="tabpanel" 
                aria-labelledby={`tab-${index}`}>                
                {/* Ensure screen readers say the "column" heading but is not visible */}
                <span className="sr-only">{outputLabel}</span>
                {/* Visible number of mg output value */}
                <span>{output[dose].value}</span>                
              </div>
            )
          })}
      </div>
    </div>
  )
}