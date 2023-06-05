import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: newRandomNumber})
    console.log(newRandomNumber)
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="randomNumber-container">
          <h1 className="randomNumber-heading">Random Number</h1>
          <p className="randomNumber-paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
