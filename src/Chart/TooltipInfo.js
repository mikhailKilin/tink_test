import React from 'react'
import {inclinMonths} from './data'
const tooltipHeight = 50
const tooltipWidth = 130
const pos = 'tooltip__percents_positive'
const neg = 'tooltip__percents_positive'
const formatDate = (date) => {
  return `${date.getDate()} ${inclinMonths[date.getMonth()]} ${date.getFullYear()}`
}
const getXYCoord = (x, y, params) => {
  let xIncr = 0
  let yIncr = 0
  if (y - tooltipHeight <= 0) {
    yIncr = +10
  } else {
    yIncr = -tooltipHeight - 10
  }
  if (x + tooltipWidth >= (params.width - params.margin.left - params.margin.right)) {
    xIncr = -135
  } else {
    xIncr = +5
  }
  return {xIncr, yIncr}
}
const getPercentsClass = (percents) => {
  return percents > 0 ? pos : neg
}
const tooltipInfo = (coordinates, params, data) => {
  let coordsIncrs = getXYCoord(coordinates.x, coordinates.y, params)
  return (
    <foreignObject x={coordsIncrs.xIncr}
                   y={coordsIncrs.yIncr} width={tooltipWidth} height={tooltipHeight}>
      <div className="tooltip">
        <div className="tooltip__date">{formatDate(data.date)}</div>
        <div className="flex-row">
          <div className="tooltip__value">{`$ ${data.value.toFixed(2)}`}</div>
          <div className={`tooltip__percents ${getPercentsClass(data.percents)}`}>
            <div className="tooltip_triangle">&#9650;</div>
            <div>{data.percents.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </foreignObject>
  )
}
export default tooltipInfo