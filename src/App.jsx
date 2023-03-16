import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import ButtonSpinScene from "./components/ButtonSpinScene";
import Cube from "./components/Cube";
import SelectFigure from "./components/SelectFigure";
import Sphere from "./components/Sphere";
import ThreeScene from "./components/ThreeScene";
import useChangeFigure from "./hooks/useChangeFigure";


function App() {
  const {figure, handleSelectFigure} = useChangeFigure()
  const [spinBackground, setSpinBackground] = useState(0)

  const handleSpinBackground = () => {
    return setSpinBackground(1) 
  }

  const handleStopSpinBackground = () => {
    return setSpinBackground(0)
  }

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex justify-center gap-4">
        <SelectFigure handleSelectFigure={handleSelectFigure}/>
        <ButtonSpinScene onClick={handleSpinBackground} text={"Spin!"} color='bg-green-500'/>
        <ButtonSpinScene onClick={handleStopSpinBackground} text={"Stop!"} color='bg-red-500'/>
      </div>
      <ThreeScene>
        <color attach={"background"} args={["#0f172a"]} />
        {figure === 'cube' ? <Cube/> : <Sphere/>}
        <ambientLight />
        <OrbitControls autoRotate autoRotateSpeed={spinBackground} />
        <Stars />
      </ThreeScene>
    </div>
  );
}

export default App;
