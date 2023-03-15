import React from 'react'

function Cube() {
  return (
    <mesh position={[0,0,0]}>
    <boxGeometry/>
    <meshStandardMaterial color={"#a855f7"} wireframe/>
    
  </mesh>
  )
}

export default Cube