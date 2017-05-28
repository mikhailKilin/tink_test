import React from 'react'
const tooltipHeight = 50
const tooltipWidth = 130
const months = ['января', 'февраля', 'марта', 'апреля',
  'мая', 'июня', 'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря']
const formatDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}
const getXYCoord = (x, y, params) => {
  let xIncr = 0
  let yIncr = 0
  if (y - tooltipHeight <= 0) {
    yIncr = 10
  } else {
    yIncr = -70
  }
  if (x + tooltipWidth >= (params.width - params.margin.left - params.margin.right)) {
    xIncr = -125
  } else {
    xIncr = +5
  }
  return {xIncr, yIncr}
}
const tooltipInfo = ({coordinates, params, data}) => {
  let coordsIncrs = getXYCoord(coordinates.x, coordinates.y, params)
  return (
    <foreignObject x={coordinates.x + coordsIncrs.xIncr}
                   y={coordinates.y + coordsIncrs.yIncr} width={tooltipWidth} height={tooltipHeight}>
      <div className="tooltip">
        <div className="tooltip__date">{formatDate(data.date)}</div>
        <div className="flex-row">
          <div className="tooltip__value">{`$ ${data.value.toFixed(2)}`}</div>
          <div className="tooltip__percents">
            <div className="tooltip_triangle">&#9650;</div>
            <div>{data.percents.toFixed(2)}</div>
            </div>
        </div>
      </div>
    </foreignObject>
  )
}
export default tooltipInfo