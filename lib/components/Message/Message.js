'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

require('./Message.scss');

var _OKBig = require('../../../svgicons/OKBig.svg');

var _OKBig2 = _interopRequireDefault(_OKBig);

var _exclaimPurple = require('../../../svgicons/exclaimPurple.svg');

var _exclaimPurple2 = _interopRequireDefault(_exclaimPurple);

var _exclaimRed = require('../../../svgicons/exclaimRed.svg');

var _exclaimRed2 = _interopRequireDefault(_exclaimRed);

var _loading = require('../../../svgicons/loading.svg');

var _loading2 = _interopRequireDefault(_loading);

var _info = require('../../../svgicons/info.svg');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDuration = 1.5;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'xiangkan-message';

function getMessageInstance() {
  messageInstance = messageInstance || _rcNotification2.default.newInstance({
    prefixCls: prefixCls,
    transitionName: 'move-up',
    style: { top: defaultTop // 覆盖原来的样式
    } });
  return messageInstance;
}

function notice(content) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
  var type = arguments[2];
  var onClose = arguments[3];

  //console.log(info);
  var iconType = {
    info: _react2.default.createElement(_info2.default, null),
    success: _react2.default.createElement(_OKBig2.default, null),
    error: _react2.default.createElement(_exclaimRed2.default, null),
    warning: _react2.default.createElement(_exclaimPurple2.default, null),
    loading: _react2.default.createElement(_loading2.default, null)
  }[type];

  var instance = getMessageInstance();
  instance.notice({
    key: key,
    duration: duration,
    style: {},
    content: _react2.default.createElement(
      'div',
      { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
      iconType,
      _react2.default.createElement(
        'span',
        null,
        content
      )
    ),
    onClose: onClose
  });
  return function () {
    var target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }();
}

exports.default = {
  info: function info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success: function success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error: function error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },

  // Departed usage, please use warning()
  warn: function warn(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  warning: function warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading: function loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};