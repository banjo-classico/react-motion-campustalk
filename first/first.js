import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Motion, spring } from 'react-motion'

class App extends Component {
  render() {
    return(
      <Motion defaultStyle={{x: 0, y: 256}} style={{x: spring(256), y: spring(0)}}>
        {val => <div>
                  <div id='one' style={{width: val.x + 'px'}}>Bigger</div>
                  <div id='two' style={{width: val.y + 'px'}}>Smaller</div>
                  </div>}
      </Motion>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

