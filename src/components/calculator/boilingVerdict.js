import React from 'react';
class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    if (this.props.scale === 'c' && this.props.temperature >= 100) {
      return <p>The water would boil.</p>
    }
    if (this.props.scale === 'f' && this.props.temperature >= 212) {
      return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
  }
}
export default BoilingVerdict;
