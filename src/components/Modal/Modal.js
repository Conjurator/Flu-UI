import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Dialog from 'rc-dialog'
import addEventListener from 'rc-util/lib/Dom/addEventListener'
import Button from '../Button/Button'
import './Modal.scss'

let mousePosition, mousePositionEventBinded

export default class Modal extends PureComponent {
  static defaultProps = {
    prefixCls: 'xiangkan-modal',
    width: 360,
    visible: false
  }
  //和rc-dialog参数格式基本相同，支持所有rc-dialog参数
  static propTypes = {
    prefixCls: PropTypes.string,
    title: PropTypes.string, //标题
    onOk: PropTypes.func, //点击确定回调
    onCancel: PropTypes.func, //点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调
    okText: PropTypes.string, //确认按钮文字
    cancelText: PropTypes.string, //取消按钮文字
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //宽度
    visible: PropTypes.bool, //对话框是否可见
    footer: PropTypes.node, //底部内容
    closable: PropTypes.bool, //是否显示右上角的关闭按钮
    maskClosable: PropTypes.bool, //点击蒙层是否允许关闭
    style: PropTypes.object,
    wrapClassName: PropTypes.string,
    maskTransitionName: PropTypes.string,
    transitionName: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  }
  handleOnTrue = e => {
    const onOk = this.props.onOk
    if (onOk) {
      onOk()
    }
  }
  handleOnCancel = e => {
    const onCancel = this.props.onCancel
    if (onCancel) {
      onCancel(e)
    }
  }
  componentDidMount() {
    if (mousePositionEventBinded) {
      return
    }
    // 只有点击事件支持从鼠标位置动画展开
    addEventListener(document.documentElement, 'click', e => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      }
      // 100ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(() => (mousePosition = null), 100)
    })
    mousePositionEventBinded = true
  }
  //todo 在卸载组件的时候去掉绑定的click事件

  getHeader = () => {
    let { title, icon } = this.props
    let typeOfIcon = typeof icon
    // if (!icon) {
    //   return <div className="modal-title">{title}</div>
    // }

    let iconNode
    if (typeOfIcon === 'string') {
      iconNode = <img src={icon} className="modal-icon" />
    } else {
      iconNode = icon
    }
    return (
      <div className="modal-header">
        {icon ? iconNode : ''}
        {title &&
          <div className="modal-title">
            {title}
          </div>}
      </div>
    )
  }
  render() {
    let { okText, cancelText, footer, visible } = this.props
    const defaultFooter = [
      <Button size="default" onClick={this.handleOnCancel}>
        {cancelText || '取消'}
      </Button>,
      <Button type="primary" size="default" onClick={this.handleOnTrue}>
        {okText || '确定'}
      </Button>
    ]
    let header = this.getHeader()
    return (
      <Dialog
        onClose={this.handleOnCancel}
        footer={footer || defaultFooter}
        {...this.props}
        visible={visible}
        title={header}
        mousePosition={mousePosition}
      />
    )
  }
}
