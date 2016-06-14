import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Motion, spring } from 'react-motion'

let SPRING_CONFIG = {stiffness: 50, damping: 5}

class App extends Component {
  render() {
    return(
      <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(300, SPRING_CONFIG), y: spring(300, SPRING_CONFIG)}} >
        {
          ({x, y}) => <div id='one' style={{width: x, height: y}}></div>
        }
      </Motion>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

