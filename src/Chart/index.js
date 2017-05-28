import React, {Component} from 'react'

import Tooltip from './Tooltip'
import shouldUpdateHOC from './ShouldUpdateHOC'
import {TimeScale, LineScale, max} from './utils'
import StaticRect from './StaticRect'
import GraphGroup from './GraphGroup'
import {generateData, months} from './data'
import './styles.css'

const ShouldUpdateTooltip = shouldUpdateHOC(Tooltip, ["coordinates"])
const ShouldUpdateStaticRect = shouldUpdateHOC(StaticRect, ["height", "width"])
const ShouldUpdateGraphGroup= shouldUpdateHOC(GraphGroup, ["data"])

const margin = {
  top: 12, right: 20, bottom: 88, left: 35
}
const height = 300;
const width = 864
const params = {
  height: height,
  width: width,
  margin: margin
}
export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      months: months,
      data: generateData(),
      coordinates: null,
      currIndex: 0
    }
    let chartWidth = width - margin.left - margin.right
    let domain = [this.state.data[0].date, this.state.data[this.state.data.length - 1].date]
    let range = [0, chartWidth]
    this.timeScale = new TimeScale()
      .setDomain(domain)
      .setRange(range)
    this.reverseTimeScale = new LineScale()
      .setDomain(range)
      .setRange([0, this.state.data.length - 1])
    this.lineScale = new LineScale()
      .setDomain([max(this.state.data.map(dot => dot.value)), 0])
      .setRange([margin.top, height - margin.bottom])
  }

  componentDidMount() {
    this.pt = this.svg.createSVGPoint()
  }

  mouseMove = (event) => {
    this.pt.x = event.clientX
    this.pt.y = event.clientY
    let mouseCoordinates = this.pt.matrixTransform(this.svg.getScreenCTM().inverse())
    mouseCoordinates.x = mouseCoordinates.x - margin.left
    if (mouseCoordinates.x >= 0 && mouseCoordinates.x <= width - margin.left - margin.right) {
      let tooltipIndex = Math.ceil(this.reverseTimeScale.map(mouseCoordinates.x) - 0.5)
      if (tooltipIndex !== this.state.currIndex) {
        let currDot = this.state.data[tooltipIndex]
        let coordinates = {
          x: this.timeScale.map(currDot.date),
          y: this.lineScale.map(currDot.value)
        }
        this.setState({
          coordinates: coordinates,
          currIndex: tooltipIndex
        })
      }
    } else {
      this.setState({
        coordinates: null
      })
    }
  }

  render() {
    let currData = this.state.data[this.state.currIndex]
    let chartTransform = `translate(${margin.left}, ${margin.top})`
    return (
      <div>
        <div className="main">
          <svg width={width} height={height}
               onMouseMove={this.mouseMove}
               ref={container => this.svg = container}
               cursor="pointer">
            <ShouldUpdateStaticRect width={width} height={height}/>
            <ShouldUpdateGraphGroup chartTransform={chartTransform}
                                    params={params}
                                    months={months}
                                    data={this.state.data}
                                    timeScale={this.timeScale}
                                    lineScale={this.lineScale}/>
            <g transform={chartTransform}>
              <ShouldUpdateTooltip coordinates={this.state.coordinates}
                                   params={params}
                                   timeScale={this.timeScale}
                                   data={currData}
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }

}


