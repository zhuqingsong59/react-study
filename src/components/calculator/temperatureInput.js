import React from 'react';
import BoilingVerdict from './boilingVerdict'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      temperature: ''
    }
  }
  handleChange = (e) => {
    // this.setState({
    //   temperature: e.target.value
    // })
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    // const temperature = this.state.temperature
    const temperature = this.props.temperature
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          scale={this.props.scale}
          temperature={parseFloat(temperature)} />
      </fieldset>
    )
  }
}

export default TemperatureInput
