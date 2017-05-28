import React from 'react'
import HorizontalLines from './HorizontalLines'
import XAxis from './XAxis'
import LinePath from './LinePath'
const maxY = 80
const tick = 20
const graphGroup = ({chartTransform, params, months, data, timeScale, lineScale}) => {
  return (
    <g transform={chartTransform}>
      <HorizontalLines maxY={maxY} tick={tick} params={params}/>
      <XAxis months={months} params={params}/>
      <LinePath data={data}
                timeScale={timeScale}
                lineScale={lineScale}/>

    </g>
  )
}

export default graphGroup