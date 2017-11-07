import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Badge.scss'

class Badge extends Component {
  static propTypes = {
    count: PropTypes.number,
    dot: PropTypes.bool,
    showZero: PropTypes.bool
  }
  static defaultProps = {
    dot: false,
    showZero: false
  }
  render() {
    const { count, dot, showZero } = this.props
    if (count === 0 && !showZero) {
      return null
    }
    if (dot) {
      return <div className="badge dot" />
    }
    return <div className="badge">{count > 99 ? '99+' : count}</div>
  }
}

export default Badge
