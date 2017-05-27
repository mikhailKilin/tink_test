import React, {Component} from 'react'
import HorizontalLines from './HorizontalLines'
import XAxis from './XAxis'
import LinePath from './LinePath'
import {generateData, months} from './utils'
import './styles.css'
const margin = {
  top: 12, right: 20, bottom: 88, left: 35
}

const height = 300;
const width = 864
export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      months: months,
      data: generateData()
    }
  }

  render() {
    return (
      <div className="main">
        <svg width={width} height={height}>
          <g transform={`translate(0,0)`}>
            <rect className="main-rect__fill" width={width} height={height}/>
          </g>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <HorizontalLines maxY={80} tick={20} height={height} width={width} margin={margin}/>
            <XAxis months={this.state.months} height={height} width={width} margin={margin}/>
            <LinePath data={this.state.data} width={width} height={height} margin={margin}/>
          </g>

        </svg>
      </div>
    )
  }

}


