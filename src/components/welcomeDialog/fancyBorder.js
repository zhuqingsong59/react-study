import React from 'react'

class FancyBorder extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    console.log(this.props)
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    )
  }
}

export default FancyBorder;
