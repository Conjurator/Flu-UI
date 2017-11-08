import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Badge.scss'

class Badge extends Component {
  static propTypes = {
    count: PropTypes.number,
    dot: PropTypes.bool,
    showZero: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string
  }
  static defaultProps = {
    dot: false,
    showZero: false,
    style: {},
    className: ''
  }
  render() {
    const { count, dot, showZero, style, className } = this.props
    if (count === 0 && !showZero) {
      return null
    }
    if (dot) {
      return <div style={style} className={`badge dot ${className}`} />
    }
    return (
      <div style={style} className={`badge ${className}`}>
        {count > 99 ? '99+' : count}
      </div>
    )
  }
}

export default Badge
