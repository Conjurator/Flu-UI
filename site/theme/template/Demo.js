import React, { Component } from 'react'

export default class Demo extends Component {
  constructor(props){
    super(props)
    this.state = {
      expand: false
    }
  }
  render () {
    return (
      <section>
        <section className="code-box"></section>
        <section className="md-box"></section>
      </section>
    )
  }
}
