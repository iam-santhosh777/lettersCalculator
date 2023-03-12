// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-text" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-text"
            id="phraseText"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <p className="no-of-letters-text">
            No.of letters: {searchInput.length}
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="stop-watch-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
