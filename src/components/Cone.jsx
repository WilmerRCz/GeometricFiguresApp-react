import React from "react";

function Cone() {
  return (
    <mesh position={[0, 0, 0]}>
      <coneGeometry />
      <meshStandardMaterial color={"#a855f7"} wireframe />
    </mesh>
  );
}

export default Cone;
