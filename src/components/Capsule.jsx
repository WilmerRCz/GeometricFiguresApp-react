import React from "react";

function Capsule() {
  return (
    <mesh position={[0, 0, 0]}>
      <capsuleGeometry />
      <meshStandardMaterial color={"#a855f7"} wireframe />
    </mesh>
  );
}

export default Capsule;
