import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import ButtonSpinScene from "./components/ButtonSpinScene";
import SelectFigure from "./components/SelectFigure";
import ThreeScene from "./components/ThreeScene";
import useChangeFigure from "./hooks/useChangeFigure";
import Sphere from "./components/Sphere";
import Cube from "./components/Cube";
import Capsule from "./components/Capsule";
import Cone from "./components/Cone";
import Ring from "./components/Ring";
import Tube from "./components/Tube";
import Circle from "./components/Circle";
import Torus from "./components/Torus";
import Cylinder from "./components/Cylinder";
import Octahedron from "./components/Octahedron";

function App() {
  const { figure, handleSelectFigure } = useChangeFigure();
  const [spinBackground, setSpinBackground] = useState(0);

  const selectedFigure = [
    { value: "sphere", component: <Sphere /> },
    { value: "cube", component: <Cube /> },
    { value: "capsule", component: <Capsule /> },
    { value: "cone", component: <Cone /> },
    { value: "ring", component: <Ring /> },
    { value: "tube", component: <Tube /> },
    { value: "circle", component: <Circle /> },
    { value: "torus", component: <Torus /> },
    { value: "cylinder", component: <Cylinder /> },
    { value: "octahedron", component: <Octahedron /> },
  ];

  const handleSpinBackground = () => {
    return setSpinBackground(1);
  };

  const handleStopSpinBackground = () => {
    return setSpinBackground(0);
  };

  const selectedComponent = selectedFigure.find((c) => c.value === figure);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex justify-center gap-4">
        <SelectFigure handleSelectFigure={handleSelectFigure} />
        <ButtonSpinScene
          onClick={handleSpinBackground}
          text={"Spin!"}
          color="bg-green-500"
        />
        <ButtonSpinScene
          onClick={handleStopSpinBackground}
          text={"Stop!"}
          color="bg-red-500"
        />
      </div>
      <ThreeScene>
        <color attach={"background"} args={["#0f172a"]} />
        {selectedComponent.component}
        <ambientLight />
        <OrbitControls autoRotate autoRotateSpeed={spinBackground} />
        <Stars />
      </ThreeScene>
    </div>
  );
}

export default App;
