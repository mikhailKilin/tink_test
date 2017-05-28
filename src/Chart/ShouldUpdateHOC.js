import React, {Component} from 'react'

const shouldUpdateHOC = (WrappedComponent, dynamicProps) => {
  return class extends Component {
    shouldComponentUpdate(nextProps){
      return dynamicProps.some(el => {
        return nextProps[el] !== this.props[el]
      })
    }
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default shouldUpdateHOC