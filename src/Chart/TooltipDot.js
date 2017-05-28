import React from 'react'

const tooltipDot = ({coordinates: {x, y}, params}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <line y2={params.height - y - params.margin.bottom}
            className="tooltip__line"></line>
      <circle r="5" fillOpacity="1" fill="rgb(246, 247, 248)"/>
      <circle r="3" className="circle_fill"/>
    </g>
  )
}

export default tooltipDot