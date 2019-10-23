import React from 'react'
import FancyBorder from './fancyBorder'
import SplitPane from './splitPane'
import Button from '../button'
import Input from '../input'
class WelcomeDialog extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  // 组件包含，类似于插槽
  render () {
    return (
      <div>
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            组件包含功能
          </h1>
          <p className="Dialog-message">
            我是Dialog-message
          </p>
        </FancyBorder>
        <SplitPane
          left={
            <Button />
          }
          right={
            <Input />
          }
        />
      </div>
    )
  }
}
export default WelcomeDialog
