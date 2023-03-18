import React from 'react'

function Torus() {
  return (
    <mesh position={[0, 0, 0]}>
    <torusGeometry />
    <meshStandardMaterial color={"#a855f7"} wireframe />
  </mesh>
  )
}

export default Torus