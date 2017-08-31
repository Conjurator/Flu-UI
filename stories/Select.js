import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from '../src/components/Select'
import './Select.scss'

const options = [
  {
    label: 'option-one',
    value: 'one'
  },
  {
    label: 'option-two',
    value: 'two'
  },
  {
    label: 'option-three',
    value: 'three'
  },
  {
    label: 'option-four',
    value: 'four'
  }
]

class Simple extends Component {
  constructor(props){
    super(props)
    this.state={
      value: undefined
    }
  }
  onChange=(option) =>{
    this.setState({
      value: option.value
    })
    action('change')(option)
  }
  render() {
    return <Select className="select" options={options} value={this.state.value} onChange={this.onChange} />
  }
}

storiesOf('Select', module).add('simple', () => <Simple />)
