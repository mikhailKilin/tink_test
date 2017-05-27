import React, {Component} from 'react'
import {TimeScale} from './utils'
export default class XAxis extends Component {
  constructor(props) {
    super(props)
    let margin = this.props.margin
    let months = this.props.data
    this.timeScale = new TimeScale()
      .setDomain([months[0].date, months[months.length - 1].date])
      .setRange([margin.left, this.props.width - margin.right])
  }

  renderAxisData() {
    return this.props.data.map(currData => {
      return (
        <g key={currData.name} opacity="1" transform={`translate(${this.timeScale.map(currData.date)},0)`}>
          <text textAnchor="middle">{currData.name}</text>
        </g>
      )
    })
  }

  render() {
    let margin = this.props.margin
    return (
      <g transform={`translate(0,${this.props.height - margin.bottom})`}>
        {this.renderAxisData()}
      </g>
    )
  }
}