import { OrbitControls, Stars } from "@react-three/drei";
import Cube from "./components/Cube";
import SelectFigure from "./components/SelectFigure";
import Sphere from "./components/Sphere";
import ThreeScene from "./components/ThreeScene";

function App() {
  
  return (
    <div className="h-screen overflow-hidden">
      <SelectFigure/>
      <h1 className="font-bold text-white text-2xl justify-center">
        Hellos World!
      </h1>
      <ThreeScene>
        <color attach={"background"} args={["#0f172a"]} />
        <Sphere/>
        {/* <Cube/> */}
        <ambientLight/>
        <OrbitControls autoRotate autoRotateSpeed={1}/>
        <Stars/>
      </ThreeScene>
    </div>
  );
}

export default App;
