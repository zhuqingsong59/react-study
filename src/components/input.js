import React from 'react';
class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  inputChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }
  render() {
    return (
      <input value={this.state.value} onChange={this.inputChange}></input>
    )
  }
}

export default Input
