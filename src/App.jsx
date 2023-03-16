import { OrbitControls, Stars } from "@react-three/drei";
import { useEffect } from "react";
import Cube from "./components/Cube";
import SelectFigure from "./components/SelectFigure";
import Sphere from "./components/Sphere";
import ThreeScene from "./components/ThreeScene";
import useChangeFigure from "./hooks/useChangeFigure";


function App() {
  const {figure, handleSelectFigure} = useChangeFigure()
  
  useEffect(() => {
    console.log(figure);
  }, [figure]);

  return (
    <div className="h-screen overflow-hidden">
      <SelectFigure handleSelectFigure={handleSelectFigure}/>
      <ThreeScene>
        <color attach={"background"} args={["#0f172a"]} />
        {figure === 'cube' ? <Cube/> : <Sphere/>}
        <ambientLight />
        <OrbitControls autoRotate autoRotateSpeed={1} />
        <Stars />
      </ThreeScene>
    </div>
  );
}

export default App;
