import React, {PureComponent} from 'react'
import {LineScale} from './utils'

const renderLineTicks = (maxY, tick, lineScale, lineWidth) => {
  let numbTicks = []
  for (let i = 0; i <= maxY; i += tick) {
    numbTicks.push(i)
  }
  return numbTicks.map(currTick => {
    return (
      <g key={currTick} className="tick" opacity="1" transform={`translate(0,${lineScale.map(currTick)})`}>
        <line className="horizontal-line" x2={lineWidth}></line>
        <text className="text-font" fill="#000" textAnchor="end" x="-12">{currTick}</text>
      </g>
    )
  })
}
export default class HorizontalLines extends PureComponent {
  constructor(props) {
    super(props)
    let margin = this.props.params.margin
    let height = this.props.params.height
    this.lineScale = new LineScale()
      .setDomain([0, this.props.maxY]).setRange([height - margin.bottom, margin.top])
  }

  render() {
    let margin = this.props.params.margin
    let width = this.props.params.width
    let lineWidth = width - margin.left - margin.right
    return (
      <g fill="none"
         className="text-font">
        {renderLineTicks(this.props.maxY, this.props.tick, this.lineScale, lineWidth)}
      </g>
    )
  }
}