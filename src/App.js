import React from 'react';
import './App.scss';
// 生命周期及基本处理
import Clock from './components/clock'
// 事件处理
import Button from './components/button'
import Input from './components/input'
// 状态提升
import Calculator from './components/calculator/index'
// 组件包含，类似于插槽
import WelcomeDialog from './components/welcomeDialog/index'
//  组件组合+继承
// <Clock />
// <Button />
// <Input />
class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
        <WelcomeDialog />
        <h1>Hello, {this.props.name ? this.props.name : 'zqs'}</h1>
      </div>
    )
  }
}
// function App(test) {
//   console.log(test)
//   return <h1>Hello, {test.name ? test.name : 'zqs'}</h1>;
// }

export default App;
