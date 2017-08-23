import React, { Component, cloneElement } from 'react'
import PropTypes from 'prop-types'
import Step from './Step'
import './Steps.scss'

class Steps extends Component {
  static propTypes = {
    current: PropTypes.number,
    stepType: PropTypes.oneOf(['checkmark', 'number'])
  }
  static defaultProps = {
    current: 0,
    stepType: 'checkmark'
  }
  render() {
    let { children, current, stepType } = this.props
    return (
      <div className="xk-steps">
        {children.map((child, index) =>
          cloneElement(child, {
            index,
            current,
            stepType,
            key: index
          })
        )}
      </div>
    )
  }
}

Steps.Step = Step

export default Steps
