import { useState } from 'react';

import "../styles/DoseCalc.scss";

export default function DoseCalc({ inputLabel, outputLabel, doseIO }) {
  // state for index of dose selected
  const [ dose, setDose ] = useState(0);

  const inputs = Object.keys(doseIO);
  const output = Object.values(doseIO);

  function doseChange(e) {    
    let index = inputs.indexOf(e.target.innerHTML);
    setDose(index);
  }
  
  return (
    <>
      <section className="DoseCalc">
        <div className='input label flex-col'>{inputLabel}</div>
        <div className='input-buttons flex-col grid-row-2-col-1'>
          {inputs.map((input, index) => {
            return <button key={index} className={dose === index ? `selected` : `not-selected`} onClick={doseChange}>{input}</button>
          })}
        </div>
        <div className='output label'>{outputLabel}</div>
        <div className='output-cell flex-col'>{output[dose]}</div>
      </section>
    </>
  )
}