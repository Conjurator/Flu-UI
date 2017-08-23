/**
 * @version 1.0 | 2017-2-20  Created by perkin // Initial version.
 * @version 1.1 | 2017-3-23  // change pageSize and Render willProps
 * params
 * total 总条数
 * pagenum 当前页数
 * pagesize 一页条数
 */
import React, { PureComponent } from 'react'
import './Paginate.scss'

import leftGray from '../../../svgicons/leftGray.svg'
import rightGray from '../../../svgicons/rightGray.svg'
import leftPurple from '../../../svgicons/leftPurple.svg'
import rightPurple from '../../../svgicons/rightPurple.svg'

const style = {
  numberError: {
    border: '1px solid #f04134'
  }
}

export class Paginate extends PureComponent {
  constructor(props) {
    super(props)
    let pageSize = props.pagesize || 8
    let total = props.total || 100
    this.state = {
      numberError: false,
      //每页显示数量
      pageSize,
      pageNum: 1,
      selectNum: '', //页面选择框
      total,
      simple: props.simple,
      pagetotal: Math.ceil(total / pageSize),
      leftIcon: leftGray,
      rightIcon: rightGray
    }
  }
  //翻页更新props
  componentWillReceiveProps(nextProps) {
    let { pageSize } = this.state
    this.setState({
      pageNum: nextProps.pagenum,
      total: nextProps.total,
      pagetotal: Math.ceil(nextProps.total / pageSize)
    })
  }
  //跳转页数
  selectPage = e => {
    var value = e.target.value,
      reg = new RegExp('^[1-9]*$')
    if (reg.test(value)) {
      if (value > this.state.pagetotal || value === '') {
        this.setState({ numberError: true })
      } else {
        this.setState({
          selectNum: value,
          numberError: false
        })
      }
    } else {
      this.setState({ numberError: true })
    }
  }

  onChange = (pagesize, pagenum) => {
    var params = {
      pagesize: parseInt(pagesize || this.state.pageSize || 5, 10),
      pagenum: parseInt(pagenum || this.state.pageNum, 10)
    }
    this.props.onChange(params)
  }
  //上一页
  prePage = () => {
    if (this.props.pagenum !== 1) {
      if (this.state.pageNum > 1) {
        this.setState({
          pageNum: --this.state.pageNum
        })
      }
      this.onChange()
    }
  }
  //下一页
  nextPage = () => {
    if (this.props.pagenum < this.state.pagetotal) {
      this.setState({
        pageNum: ++this.state.pageNum
      })
      this.onChange()
    }
  }
  goToPage = () => {
    if (this.state.numberError) {
      this.setState({
        numberError: true
      })
      // Message.warn('请输入正确的跳转页码！',2)
    } else {
      this.onChange(this.state.pageSize, this.state.selectNum)
    }
  }

  //选择每页展示数量
  selectPageSize = e => {
    let selectedIndex = e.target.selectedIndex,
      pagesize = e.target.options[selectedIndex].value,
      pagenum = 1
    localStorage.pageSize = pagesize
    this.setState({
      pageSize: pagesize,
      pageNum: pagenum
    })
    this.onChange(pagesize, pagenum)
  }
  //
  render() {
    //页码总数
    const { simple, leftIcon, rightIcon } = this.state
    const pageNumCount = Math.ceil(this.props.total / this.state.pageSize)
    return (
      <div className="paginate">
        {!simple
          ? <span>
              <span>
                共计{pageNumCount}页 / <label>{this.props.total}</label>条总数据&nbsp;&nbsp;
              </span>
              <span>每页展示</span>
              <div className="paginate-select">
                <select
                  value={this.state.pageSize}
                  onChange={this.selectPageSize}
                  ref="selectSize"
                  name="pageSize"
                  className="pageSize"
                >
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                {/*
            			    <i className="muicon muicon-select" onClick={this.selectOpen.bind(this)}></i>
            			*/}
              </div>
              <span>个</span>
              <span>|</span>
            </span>
          : ''}

        {/*prev left icon*/}
        <button
          style={this.state.pageNum === 1 ? { visibility: 'hidden' } : { visibility: 'visible' }}
          onClick={this.prePage}
          className="prePage"
          onMouseEnter={() => {
            this.setState({
              leftIcon: leftPurple
            })
          }}
          onMouseLeave={() => {
            this.setState({
              leftIcon: leftGray
            })
          }}
        >
          <img src={leftIcon} />
        </button>
        {/*
                    方式一：props
                    <span>{this.props.pagenum} / {this.state.pagetotal}</span>
                    方式二：state
                */}
        <span>
          {this.state.pageNum} / {pageNumCount}
        </span>
        {/*next right icon*/}
        <button
          style={this.state.pageNum === this.state.pagetotal ? { visibility: 'hidden' } : { visibility: 'visible' }}
          onClick={this.nextPage}
          className="nextPage"
          onMouseEnter={() => {
            this.setState({
              rightIcon: rightPurple
            })
          }}
          onMouseLeave={() => {
            this.setState({
              rightIcon: rightGray
            })
          }}
        >
          <img src={rightIcon} />
        </button>
        <input
          style={this.state.numberError ? style.numberError : {}}
          className="pageInput"
          type="text"
          onChange={this.selectPage}
        />
        <button onClick={this.goToPage} className="goToPage">
          跳转
        </button>
      </div>
    )
  }
}

export default Paginate
