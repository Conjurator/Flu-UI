import React, { Component } from 'react'
import ClassNames from 'classnames'
import './Card.scss'

class Card extends Component {
  static defaultProps = {
    width: 360,
    height: 120
  }
  render() {
    const { wrapClass, children, width, height, title } = this.props
    return (
      <div className={ClassNames('fluui-card', wrapClass)} style={{ width, height }}>
        {title && <div className="fluui-card-title">{title}</div>}
        <div
          className={ClassNames('fluui-card-content', {
            'with-title': title
          })}
        >
          {children}
        </div>F
      </div>
    )
  }
}

export default Card
