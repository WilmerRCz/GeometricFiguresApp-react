import React from "react";

function Octahedron() {
  return (
    <mesh position={[0, 0, 0]}>
      <octahedronGeometry />
      <meshStandardMaterial color={"#a855f7"} wireframe />
    </mesh>
  );
}

export default Octahedron;
