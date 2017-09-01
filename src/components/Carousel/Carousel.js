/**
 * @version 1.0 | 2017-2-20  Created by perkin // Initial version.
 * @version 1.1 | 2017-3-23  // change pageSize and Render willProps
 */
import React, { Component } from 'react'
import './Carousel.scss'
import classNames from 'classnames'
import { browserHistory } from 'react-router'

export class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesSrc: props.imagesSrc ? props.imagesSrc : [],
      urls: props.urls ? props.urls : [],
      active: props.active ? props.active : 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.imagesSrc && nextProps.imagesSrc instanceof Array && nextProps.imagesSrc.length > 0) {
      //如果图片发生改变，则进行切换
      this.setState({
        imagesSrc: nextProps.imagesSrc,
        active: 0,
        style: {
          display: 'block'
        }
      })
    } else {
      this.setState({
        style: {
          display: 'none'
        }
      })
    }
  }
  adjustHeight = () => {
    this.refs.carouselRoot.style.height = this.refs.carouselRoot.offsetWidth * 0.243589744 + 'px'
  }
  componentDidMount() {
    this.startAnimate()
    window.addEventListener('resize', this.adjustHeight, false)
    this.adjustHeight()
  }

  startAnimate = () => {
    if (this.animateId) return
    var _this = this

    var id = setInterval(() => {
      _this.setState({
        active: 1 + _this.state.active < this.state.imagesSrc.length ? 1 + _this.state.active : 0
      })
    }, 5000)
    this.setState({
      animateId: id
    })
  }

  gotoUrl = () => {
    browserHistory.push(this.props.imagesSrc[this.state.active].href)
  }

  componentWillUnmount() {
    clearInterval(this.state.animateId)
    window.removeEventListener('resize', this.adjustHeight)
  }

  render() {
    const { imagesSrc, active } = this.state
    return (
      <div
        ref="carouselRoot"
        onMouseOver={() => {
          clearInterval(this.state.animateId)
          this.setState({
            animateId: NaN
          })
        }}
        onMouseLeave={() => {
          this.startAnimate()
        }}
        style={Object.assign({}, this.props.style, this.state.style)}
        className="fluCarousel"
      >
        {imagesSrc.map((value, index) => {
          return (
            <div key={index} className={classNames({ singleImg: true, active: active === index })}>
              <img src={value.url} onClick={this.gotoUrl} alt="" />
            </div>
          )
        })}
        <div className="switch">
          {imagesSrc.map((value, index) => {
            return (
              <div
                onClick={() => {
                  this.setState({
                    active: index
                  })
                }}
                className={classNames({ indexBlock: true, active: active === index })}
                key={index}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Carousel
