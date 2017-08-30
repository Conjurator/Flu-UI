import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Message from '../src/components/Message'

class Info extends React.Component {
  componentDidMount() {
    Message.destroy();
    Message.info('消息', 100000);
  }
  componentWillUnmount() {
    Message.destroy();
  }
  render() {
    return (
      <div></div>
    );
  }
}

class Success extends React.Component {
  componentDidMount() {
    Message.destroy();
    Message.success('成功', 100000);
  }
  componentWillUnmount() {
    Message.destroy();
  }
  render() {
    return (
      <div></div>
    );
  }
}

class Error extends React.Component {
  componentDidMount() {
    Message.destroy();
    Message.error('错误', 100000);
  }
  componentWillUnmount() {
    Message.destroy();
  }
  render() {
    return (
      <div></div>
    );
  }
}

class Warning extends React.Component {
  componentDidMount() {
    Message.destroy();
    Message.warning('警告', 100000);
  }
  componentWillUnmount() {
    Message.destroy();
  }
  render() {
    return (
      <div></div>
    );
  }
}

class Loading extends React.Component {
  componentDidMount() {
    Message.destroy();
    Message.loading('加载中', 100000);
  }
  componentWillUnmount() {
    Message.destroy();
  }
  render() {
    return (
      <div></div>
    );
  }
}






storiesOf('Message', module)
  .add('info', () => <Info></Info>)
  .add('success', () => <Success></Success>)
  .add('error', () => <Error></Error>)
  .add('warning', () => <Warning></Warning>)
  .add('loading', () => <Loading></Loading>)
  
