import React, {Component} from 'react'
import HorizontalLines from './HorizontalLines'
import XAxis from './XAxis'
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
      months: [{
        date: new Date(2015, 0),
        name: 'Январь'
      }, {
        date: new Date(2015, 1),
        name: 'Февраль'
      }, {
        date: new Date(2015, 2),
        name: 'Март'
      }, {
        date: new Date(2015, 3),
        name: 'Апрель'
      }, {
        date: new Date(2015, 4),
        name: 'Май'
      }, {
        date: new Date(2015, 5),
        name: 'Июнь'
      }, {
        date: new Date(2015, 6),
        name: 'Июль'
      }, {
        date: new Date(2015, 7),
        name: 'Август'
      }, {
        date: new Date(2015, 8),
        name: 'Сентябрь'
      }, {
        date: new Date(2015, 9),
        name: 'Октябрь'
      }, {
        date: new Date(2015, 10),
        name: 'Ноябрь'
      }, {
        date: new Date(2015, 11),
        name: 'Декабрь'
      }]
    }
  }

  render() {
    return (
      <div className="main">
        <svg width={width} height={height}>
          <g>
            <rect className="main-rect__fill" width={width} height={height}/>
          </g>
          <HorizontalLines maxY={80} tick={20} height={height} width={width} margin={margin}/>
          <XAxis data={this.state.months} height={height} width={width} margin={margin}/>
        </svg>
      </div>
    )
  }

}


