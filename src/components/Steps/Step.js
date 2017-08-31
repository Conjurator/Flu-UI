import React, { Component } from 'react'
import ClassNames from 'classnames'
import OKGray from '../../../svgicons/OKGray.svg'
import OK from '../../../svgicons/OK.svg'
import OKOrange from '../../../svgicons/OKOrange.svg'

const PROCESS = 'process'
const FINISH = 'finish'
const WAIT = 'wait'

const svgMap = {
  [FINISH]: OKOrange,
  [PROCESS]: OK,
  [WAIT]: OKGray
}

class Step extends Component {
  getStatus() {
    let { index, current } = this.props
    if (index === current) {
      return PROCESS
    }
    if (index < current) {
      return FINISH
    }
    return WAIT
  }
  render() {
    let { label, stepType, index } = this.props
    let status = this.getStatus()
    let Svg = svgMap[status]

    return (
      <div className={`xk-step xk-${status}`}>
        <div
          className={ClassNames('xk-step-head', {
            noBorder: stepType === 'checkmark'
          })}
        >
          {stepType === 'checkmark' ? <Svg /> : index + 1}
        </div>
        <div className="xk-step-label">{label}</div>
        <div className="xk-step-tail">••••••••••••••</div>
      </div>
    )
  }
}

export default Step
