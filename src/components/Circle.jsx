import React from 'react'

function Circle() {
  return (
    <mesh position={[0, 0, 0]}>
    <circleGeometry />
    <meshStandardMaterial color={"#a855f7"} wireframe />
  </mesh>
  )
}

export default Circle