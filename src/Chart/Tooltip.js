import React from 'react'
import TooltipInfo from './TooltipInfo'

const tooltip = ({hide, coordinates, params, data}) => {
  if (hide) {
    return null
  } else {
    return (
      <g transform={`translate(${coordinates.x}, ${coordinates.y})`}>
        <line y2={params.height - coordinates.y - params.margin.bottom}
              className="tooltip__line"></line>
        <circle r="5" className="circle_outer"/>
        <circle r="3" className="circle_inner"/>
        {TooltipInfo(coordinates, params, data)}
      </g>
    )
  }
}

export default tooltip