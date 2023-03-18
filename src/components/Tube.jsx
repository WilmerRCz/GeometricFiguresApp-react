import React from 'react'

function Tube() {
  return (
    <mesh position={[0, 0, 0]}>
    <tubeGeometry />
    <meshStandardMaterial color={"#a855f7"} wireframe />
  </mesh>
  )
}

export default Tube