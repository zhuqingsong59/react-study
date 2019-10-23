import React from 'react';
import TemperatureInput from './temperatureInput'
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scale: 'c',
      temperature: ''
    }
  }
  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          onTemperatureChange={this.handleCelsiusChange}
          temperature={celsius}
          scale="c" />
        <TemperatureInput
          onTemperatureChange={this.handleFahrenheitChange}
          temperature={fahrenheit}
          scale="f" />
      </>
    );
  }
}
export default Calculator;
