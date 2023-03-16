import { useState } from "react";

export default function useChangeFigure(initialValue = "sphere") {

  const [figure, setFigure] = useState(initialValue)

  const handleSelectFigure = (value) => {
    setFigure(value);
  };

  return {figure,
    handleSelectFigure}

}