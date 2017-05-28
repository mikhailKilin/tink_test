import React, {PureComponent} from 'react'

class LinePath extends PureComponent {

  generatePathString() {
    let data = this.props.data
    let lData = data.slice(1).map(dot => {
      return `L ${this.props.timeScale.map(dot.date)} ${this.props.lineScale.map(dot.value)}`
    })
    return `M ${this.props.timeScale.map(data[0].date)} ${this.props.lineScale.map(data[0].value)} ${lData.join(' ')}`
  }

  render() {
    let d = this.generatePathString()
    return (
      <g className="path-group">
        <path d={d} className="path"/>
      </g>
    )
  }
}

export default LinePath