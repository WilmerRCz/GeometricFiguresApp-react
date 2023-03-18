import React from 'react'

function Cylinder() {
  return (
    <mesh position={[0, 0, 0]}>
    <cylinderGeometry />
    <meshStandardMaterial color={"#a855f7"} wireframe />
  </mesh>
  )
}

export default Cylinder