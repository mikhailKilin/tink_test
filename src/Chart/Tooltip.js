import React from 'react'
import TooltipInfo from './TooltipInfo'

const tooltip = ({coordinates, params, data}) => {
  if (coordinates === null) {
    return null
  } else {
    return (
      <g transform={`translate(${coordinates.x}, ${coordinates.y})`}>
        <line y2={params.height - coordinates.y - params.margin.bottom}
              className="tooltip__line"></line>
        <circle r="5" fillOpacity="1" fill="rgb(246, 247, 248)"/>
        <circle r="3" className="circle_fill"/>
        {TooltipInfo(coordinates, params, data)}
      </g>
    )
  }
}

export default tooltip