// Write your code here
import './index.css'
import {Component} from 'react'

class App extends Component {
  state = {change: 'DarkMode'}

  lightMode = () => {
    this.setState({change: 'LightMode'})
  }

  DarkMode = () => {
    this.setState({change: 'DarkMode'})
  }

  render() {
    const {change} = this.state
    return (
      <div className={change}>
        <h1>Click To Change Mode</h1>
        {change === 'LightMode' && (
          <button onClick={this.DarkMode} type="button">
            Dark Mode
          </button>
        )}
        {change === 'DarkMode' && (
          <button onClick={this.lightMode} type="button">
            Light Mode
          </button>
        )}
      </div>
    )
  }
}

export default App
