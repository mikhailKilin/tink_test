import React from 'react'
const tooltipHeight = 60
const tooltipWidth = 120
const getXYCoord = (x,y, params) => {
  let xIncr = 0
  let yIncr = 0
  if(y - tooltipHeight <=0) {
    yIncr = 10
  } else {
    yIncr = -70
  }
  if(x + tooltipWidth >=  (params.width - params.margin.left - params.margin.right)) {
    xIncr = - 125
  } else {
    xIncr = + 5
  }
  return {xIncr, yIncr}
}
const tooltipInfo = ({coordinates, params, data}) => {
  let coordsIncrs = getXYCoord(coordinates.x, coordinates.y, params)
  return (
    <foreignObject x={coordinates.x + coordsIncrs.xIncr}
                   y={coordinates.y + coordsIncrs.yIncr} width={tooltipWidth} height={tooltipHeight}>
      <div className="tooltip">
        {/*
         <div className="tooltip__date">{data.date.toString()}</div>
         <div className="tooltip__value">{data.value}</div>
         <div className="tooltip__percents">{data.percents}</div>
         */}
      </div>
    </foreignObject>
  )
}
export default tooltipInfo