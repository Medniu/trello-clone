import React from "react";
import "./DropDawn.css";

const DropDown = ({  currentValue, optionalList, changeSortType }) => { 
  
  console.log(currentValue, optionalList, changeSortType )
  
  return (
  <>
    <div className="box">
      <select value={currentValue} onChange={(event) => changeSortType(event.target.value)}>
        {optionalList.map((value) => (
          <option key={value.image} value={value.image}>
            {value.text}
          </option>
        ))}
      </select>
    </div>
  </>
)};
export default DropDown;