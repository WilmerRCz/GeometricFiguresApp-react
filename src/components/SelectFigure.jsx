import React from "react";
import useChangeFigure from "../hooks/useChangeFigure";

function SelectFigure() {
  const {handleSelectFigure} = useChangeFigure()
  const options = [
    { value: "sphere", label: "Esfera" },
    { value: "cube", label: "Cubo" },
  ];

  function handleSelectChange(event) {
    const value = event.target.value;
    handleSelectFigure(value)
  }

  return (
    <select
      className="w-64 rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      onChange={handleSelectChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectFigure;
