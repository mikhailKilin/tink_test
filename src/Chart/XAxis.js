import React, {Component} from 'react'
import {LineScale} from './utils'
export default class XAxis extends Component {
  constructor(props) {
    super(props)
    let margin = this.props.margin
    let months = this.props.months
    let rengeLength = (this.props.width - margin.right) / months.length
    let halfRengeLength = rengeLength / 2
    this.timeScale = new LineScale()
      .setDomain([0, months.length - 1])
      .setRange([halfRengeLength, this.props.width - margin.right - halfRengeLength - margin.left])
  }

  renderAxisData() {
    return this.props.months.map((currData, index) => {
      return (
        <g key={currData.name} transform={`translate(${this.timeScale.map(index)},0)`}>
          <text textAnchor="middle" className="text-font">{currData.name}</text>
        </g>
      )
    })
  }

  render() {
    let margin = this.props.margin
    let year = this.props.months[0].date.getFullYear()
    return (
      <g transform={`translate(0,${this.props.height - margin.bottom + 22})`}>
        {this.renderAxisData()}
        <text className="text-year" y="22" x="16">{year}</text>
      </g>
    )
  }
}