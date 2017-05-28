import React from 'react'

const staticRect = ({width, height}) => {
  return (
    <g transform={`translate(0,0)`}>
      <rect className="main-rect__fill" width={width} height={height}/>
    </g>
  )
}

export default staticRect