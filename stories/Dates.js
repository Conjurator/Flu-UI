import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { SingleDatePicker, DateRangePicker } from '../src/components/Dates'

storiesOf('DatePicker', module).add('SingleDatePicker', () => <SingleDay />).add('DateRange', () => <DayRange />)

class SingleDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      focused: false
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState({
      focused
    })
  }
  onDateChange = date => {
    this.setState({ date })
  }
  render() {
    return (
      <SingleDatePicker
        date={this.state.date}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        focused={this.state.focused}
      />
    )
  }
}

class DayRange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null
    }
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
  }
  onFocusChange = focusedInput => {
    this.setState({ focusedInput })
  }
  render() {
    const { focusedInput, startDate, endDate } = this.state
    return (
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        focusedInput={focusedInput}
      />
    )
  }
}
