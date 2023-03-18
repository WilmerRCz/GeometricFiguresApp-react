import { useState } from "react";

export default function useChangeFigure() {

  const [figure, setFigure] = useState("sphere")

  const handleSelectFigure = (value) => {
    setFigure(value);
  };

  return {figure,
    handleSelectFigure}
}