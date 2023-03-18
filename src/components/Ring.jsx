import React from "react";

function Ring() {
  return (
    <mesh position={[0, 0, 0]}>
      <ringGeometry />
      <meshStandardMaterial color={"#a855f7"} wireframe />
    </mesh>
  );
}

export default Ring;
