import { useState } from 'react';

import "../styles/DoseCalc.scss";

export default function DoseCalc({ inputLabel, outputLabel, doseIO, bgOutput, colorOutput, colWidth }) {
  // state for index of dose selected
  const [ dose, setDose ] = useState(0);

  const inputs = Object.keys(doseIO);
  const output = Object.values(doseIO);

  function doseChange(e) {
    let index = inputs.indexOf(e.target.innerHTML);
    setDose(index);
  }
  
  return (
    <table className="DoseCalc">
      <tbody>
        <tr>
          <th scope='col' className={`input label ${colWidth || "width-33p"}`}>
            {inputLabel}
          </th>
          <th scope='col' className='output label'>
            {outputLabel}
          </th>
        </tr>
        {inputs.map((input, index, inputs) => {
          const bg = doseIO[input].bgColor; // class name for background-color
          const color = doseIO[input].fontColor; // class name for font color
          const array = bg.split("-");
          const pointColor = array[array.length - 1];
          
          return (
            <tr key={index}>
              <td className={dose === index ? `selected ${bg}` : `not-selected`}>
                <button 
                  onClick={doseChange} 
                  className={dose !== index ? color : ''}
                  role="tab"
                  aria-selected={dose === index}
                  >
                  {input}
                </button>
                <div className={`right-pointer ${pointColor}`}></div>
              </td>
              {index === 0 && (
                <td rowSpan={inputs.length} className={`output-cell ${bgOutput} ${colorOutput}`} style={{ borderTop: 0 }}>
                  {output[dose].value}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}