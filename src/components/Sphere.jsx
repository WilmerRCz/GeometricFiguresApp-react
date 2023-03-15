import React from 'react'

function Sphere() {
  return (
    <mesh position={[0,0,0]}>
      <sphereGeometry/>
      <meshStandardMaterial color={"#06b6d4"} wireframe/>
      
    </mesh>
  )
}

export default Sphere