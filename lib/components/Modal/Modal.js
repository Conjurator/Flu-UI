'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mousePosition = void 0,
    mousePositionEventBinded = void 0;

var Modal = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnTrue = function (e) {
      var onOk = _this.props.onOk;
      if (onOk) {
        onOk();
      }
    }, _this.handleOnCancel = function (e) {
      var onCancel = _this.props.onCancel;
      if (onCancel) {
        onCancel(e);
      }
    }, _this.getHeader = function () {
      var _this$props = _this.props,
          title = _this$props.title,
          icon = _this$props.icon;

      var typeOfIcon = typeof icon === 'undefined' ? 'undefined' : _typeof(icon);
      // if (!icon) {
      //   return <div className="modal-title">{title}</div>
      // }

      var iconNode = void 0;
      if (typeOfIcon === 'string') {
        iconNode = _react2.default.createElement('img', { src: icon, className: 'modal-icon', alt: '' });
      } else {
        iconNode = icon;
      }
      return _react2.default.createElement(
        'div',
        { className: 'modal-header' },
        icon ? iconNode : '',
        title && _react2.default.createElement(
          'div',
          { className: 'modal-title' },
          title
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  //和rc-dialog参数格式基本相同，支持所有rc-dialog参数


  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (mousePositionEventBinded) {
        return;
      }
      // 只有点击事件支持从鼠标位置动画展开
      (0, _addEventListener2.default)(document.documentElement, 'click', function (e) {
        mousePosition = {
          x: e.pageX,
          y: e.pageY
          // 100ms 内发生过点击事件，则从点击位置动画展示
          // 否则直接 zoom 展示
          // 这样可以兼容非点击方式展开
        };setTimeout(function () {
          return mousePosition = null;
        }, 100);
      });
      mousePositionEventBinded = true;
    }
    //todo 在卸载组件的时候去掉绑定的click事件

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          okText = _props.okText,
          cancelText = _props.cancelText,
          footer = _props.footer,
          visible = _props.visible;

      var defaultFooter = [_react2.default.createElement(
        _Button2.default,
        { size: 'default', onClick: this.handleOnCancel, key: '1' },
        cancelText || '取消'
      ), _react2.default.createElement(
        _Button2.default,
        { type: 'primary', size: 'default', onClick: this.handleOnTrue, key: '2' },
        okText || '确定'
      )];
      var header = this.getHeader();
      return _react2.default.createElement(_rcDialog2.default, _extends({
        onClose: this.handleOnCancel,
        footer: footer || defaultFooter
      }, this.props, {
        visible: visible,
        title: header,
        mousePosition: mousePosition
      }));
    }
  }]);

  return Modal;
}(_react.PureComponent);

Modal.defaultProps = {
  prefixCls: 'xiangkan-modal',
  width: 360,
  visible: false };
Modal.propTypes = {
  prefixCls: _propTypes2.default.string,
  title: _propTypes2.default.string, //标题
  onOk: _propTypes2.default.func, //点击确定回调
  onCancel: _propTypes2.default.func, //点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调
  okText: _propTypes2.default.string, //确认按钮文字
  cancelText: _propTypes2.default.string, //取消按钮文字
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]), //宽度
  visible: _propTypes2.default.bool, //对话框是否可见
  footer: _propTypes2.default.node, //底部内容
  closable: _propTypes2.default.bool, //是否显示右上角的关闭按钮
  maskClosable: _propTypes2.default.bool, //点击蒙层是否允许关闭
  style: _propTypes2.default.object,
  wrapClassName: _propTypes2.default.string,
  maskTransitionName: _propTypes2.default.string,
  transitionName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string])
};
exports.default = Modal;