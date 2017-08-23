import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import './Button.scss'

class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string, //primary,secondary
    htmlType: PropTypes.string, //button,
    size: PropTypes.string, //default, large, small
    className: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onClick: PropTypes.func,
    style: PropTypes.object
  }
  static defaultProps = {
    size: 'default',
    htmlType: 'button',
    onClick: () => null
  }
  handleClick = e => {
    let { disabled, onClick } = this.props
    if (!disabled) {
      onClick()
    }
  }
  render() {
    const {
      type,
      htmlType,
      size,
      className,
      disabled,
      children,
      style
    } = this.props
    const prefix = 'xk-button'
    let classes = ClassNames(
      [
        prefix,
        `${prefix}-${size}`,
        `${prefix}-${type}`,
        {
          [`${prefix}-disabled`]: disabled
        }
      ],
      className
    )
    return (
      <button
        className={classes}
        type={htmlType}
        onClick={this.handleClick}
        style={style}
      >
        {children}
      </button>
    )
  }
}

export default Button
