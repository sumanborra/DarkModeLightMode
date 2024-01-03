// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark'}

  lightMode = () => {
    this.setState({mode: 'Light'})
  }

  darkMode = () => {
    this.setState({mode: 'Dark'})
  }

  render() {
    const {mode} = this.state
    let cardMode
    if (mode === 'Dark') {
       cardMode = (
        <div className="bg-container2">
          <div className="bg-container">
            <h1 className="heading">Click To Change Mode</h1>
            <button className="buttn" onClick={this.lightMode}>
              Light Mode
            </button>
          </div>
        </div>
      )
    }
    if (mode === 'Light') {
      cardMode = (
        <div className="bg-container2">
          <div className="bg-container1">
            <h1 className="heading1">Click To Change Mode</h1>
            <button className="buttn" onClick={this.darkMode}>
              Dark Mode
            </button>
          </div>
        </div>
      )
    }
    
  }
}
export default LightDarkMode
