import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Input.scss'

function reviseControlledValue(value) {
  if (value === null || typeof value === 'undefined') return ''
  return value
}

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputStyles: null
    }
  }
  static defaultProps = {
    disabled: false,
    prefix: 'fluui'
  }
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: PropTypes.bool,
    value: PropTypes.any,
    type: PropTypes.string
  }
  focus() {
    this.refs.input.focus()
  }

  render() {
    let props = this.props,
      state = this.state
    let opts = {}
    if (props.disabled) {
      opts.readOnly = 'readonly'
    }
    switch (props.type) {
      case 'textarea':
        return (
          <div
            style={Object.assign({}, props.style, this.state.inputStyles)}
            className={`fluui_controls ${props.inputContainerClass || ''}`}
          >
            <span className="xk_text_box xk_textarea_box">
              <textarea
                ref="textarea"
                value={props.value}
                className="xk_textarea"
                type={props.type || 'text'}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                {...opts}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
              />
            </span>
            {props.info}
          </div>
        )
      default:
        return (
          <div
            style={Object.assign({}, props.style, state.inputStyles)}
            className={`fluui_controls ${props.inputContainerClass || ''}`}
          >
            <span className="xk_text_box xk_input_box">
              <input
                ref="input"
                value={props.value}
                className={classNames('xk_input', {
                  xk_input_readonly: props.disabled
                })}
                type={props.type || 'text'}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                {...opts}
              />
            </span>
            {props.info}
          </div>
        )
    }
  }
}
