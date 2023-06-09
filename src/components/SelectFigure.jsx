import React from "react";

function SelectFigure({ handleSelectFigure }) {
  const options = [
    { value: "sphere", label: "Esfera" },
    { value: "cube", label: "Cubo" },
    { value: "capsule", label: "Capsula" },
    { value: "cone", label: "Cono" },
    { value: "ring", label: "Anillo" },
    { value: "tube", label: "Tubo" },
    { value: "circle", label: "Circulo" },
    { value: "torus", label: "Donut" },
    { value: "cylinder", label: "Cilindro" },
    { value: "octahedron", label: "Octahedro" },
  ];

  function handleSelectChange(event) {
    const value = event.target.value;
    handleSelectFigure(value);
  }

  return (
    <select
      className="w-32 rounded-lg border-white bg-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
