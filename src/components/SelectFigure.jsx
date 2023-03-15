import React from "react";

function SelectFigure() {
  const options = [
    { value: "circle", label: "Círculo" },
    { value: "square", label: "Cuadrado" },
    { value: "triangle", label: "Triángulo" },
    { value: "rectangle", label: "Rectángulo" },
  ];

  function handleSelectChange(event) {
    const value = event.target.value;

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
