import React, {Component} from 'react'
import {LineScale} from './utils'

const renderLineTicks = (maxY, tick, lineScale, lineWidth) => {
  let numbTicks = []
  for (let i = 0; i <= maxY; i += tick) {
    numbTicks.push(i)
  }
  return numbTicks.map(currTick => {
    return (
      <g key={currTick} className="tick" opacity="1" transform={`translate(0,${lineScale.map(currTick)})`}>
        <line className="horizontal-line" stroke="#000" x2={lineWidth}></line>
        <text className="text-font" fill="#000" textAnchor="end" x="-12">{currTick}</text>
      </g>
    )
  })
}
export default class HorizontalLines extends Component {
  constructor(props) {
    super(props)
    this.lineScale = new LineScale()
      .setDomain([0, this.props.maxY]).setRange([this.props.height - this.props.margin.bottom, this.props.margin.top])
  }

  render() {
    let margin = this.props.margin
    let lineWidth = this.props.width - margin.left - margin.right
    return (
      <g fill="none"
         className="text-font">
        {renderLineTicks(this.props.maxY, this.props.tick, this.lineScale, lineWidth)}
      </g>
    )
  }
}