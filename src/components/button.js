import React from 'react';
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '没有'
    }
    // this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick = () => {
    this.setState(preState => ({
      status: preState.status === '没有' ? '对对对' : '没有'
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>点我</button>
        <p> 我被点了 ? {this.state.status}</p>
      </div>
    )
  }
}

export default Button
