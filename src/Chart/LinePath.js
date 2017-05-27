import React, {Component} from 'react'
import {TimeScale, LineScale, max} from './utils'



class LinePath extends Component {

  generatePathString() {
    let data = this.props.data
    let margin = this.props.margin
    let chartWidth = this.props.width - margin.left - margin.right

    let timeScale = new TimeScale()
      .setDomain([data[0].date, data[data.length - 1].date])
      .setRange([0, chartWidth])
    let lineScale = new LineScale()
      .setDomain([max(data.map(dot => dot.value)), 0])
      .setRange([margin.top, this.props.height - margin.bottom])
    let lData =  data.slice(1).map(dot => {
      return `L ${timeScale.map(dot.date)} ${lineScale.map(dot.value)}`
    })
    return `M ${timeScale.map(data[0].date)} ${lineScale.map(data[0].value)} ${lData.join(' ')}`
  }

  render() {
    let d = this.generatePathString()
    return (
      <g>
        <path d={d} className="path"/>
      </g>
    )
  }
}

export default LinePath