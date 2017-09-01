import React from 'react'
import Notification from 'rc-notification'
import './Message.scss'
import OKBig from '../../../svgicons/OKBig.svg'
import ExclaimPurple from '../../../svgicons/exclaimPurple.svg'
import ExclaimRed from '../../../svgicons/exclaimRed.svg'
import Loading from '../../../svgicons/loading.svg'
import Info from '../../../svgicons/info.svg'

let defaultDuration = 1.5
let defaultTop
let messageInstance
let key = 1
let prefixCls = 'xiangkan-message'

function getMessageInstance() {
  messageInstance =
    messageInstance ||
    Notification.newInstance({
      prefixCls,
      transitionName: 'move-up',
      style: { top: defaultTop } // 覆盖原来的样式
    })
  return messageInstance
}

function notice(content, duration = defaultDuration, type, onClose) {
  //console.log(info);
  let iconType = {
    info: Info,
    success: OKBig,
    error: ExclaimRed,
    warning: ExclaimPurple,
    loading: Loading
  }[type]

  let instance = getMessageInstance()
  instance.notice({
    key,
    duration,
    style: {},
    content: (
      <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
        <img src={iconType} alt="" />
        <span>{content}</span>
      </div>
    ),
    onClose
  })
  return (function() {
    let target = key++
    return function() {
      instance.removeNotice(target)
    }
  })()
}

export default {
  info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose)
  },
  success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose)
  },
  error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose)
  },
  // Departed usage, please use warning()
  warn(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose)
  },
  warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose)
  },
  loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose)
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top
      messageInstance = null // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
}
