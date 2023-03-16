import React from 'react'

function ButtonSpinScene({text, color, onClick}) {
  return (
    <div>
      <button className={`px-2 text-white rounded-lg ${color}`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default ButtonSpinScene