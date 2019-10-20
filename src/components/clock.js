import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }
  //在组件即将被挂载到页面上时自动执行（挂载之前）
  componentWillMount () {
    console.log('componentWillMount')
  }
  //渲染页面
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
  //在组件即将被挂载到页面后时自动执行（挂载之后）
  componentDidMount () {
    this.timerID = setInterval(
      // 直接修改 state并不会重新渲染组件，需要使用this.setState()代替
      () => this.setState({
              date: new Date()
            }),
      1000
    )
  }
  //当组件从父组件中接受参数，父组件的render函数重新执行，则子组件该函数执行
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  //在组件被更新之前自动执行
  shouldComponentUpdate(){
    // console.log('shouldComponentUpdate')
    //当return为turn，则更新被执行。当返回为false，则更新被取消
    return true
  }
  //组件被更新之前执行。当shouldComponentUpdate返回false时不执行
  componentWillUpdate(){
    // console.log('componentWillUpdate');
  }
  //在组件更新完成之后执行
  componentDidUpdate(){
    // console.log('componentDidUpdate');
  }
  //当组件即将卸载时执行
  componentWillUnmount () {
    clearInterval(this.timerID)
  }
}

export default Clock
