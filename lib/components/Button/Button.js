'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Button.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) {
        onClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          htmlType = _props.htmlType,
          size = _props.size,
          className = _props.className,
          disabled = _props.disabled,
          children = _props.children,
          style = _props.style;

      var prefix = 'xk-button';
      var classes = (0, _classnames2.default)([prefix, prefix + '-' + size, prefix + '-' + type, _defineProperty({}, prefix + '-disabled', disabled)], className);
      return _react2.default.createElement(
        'button',
        {
          className: classes,
          type: htmlType,
          onClick: this.handleClick,
          style: style
        },
        children
      );
    }
  }]);

  return Button;
}(_react.PureComponent);

Button.propTypes = {
  type: _propTypes2.default.string, //primary,secondary
  htmlType: _propTypes2.default.string, //button,
  size: _propTypes2.default.string, //default, large, small
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  onClick: _propTypes2.default.func,
  style: _propTypes2.default.object
};
Button.defaultProps = {
  size: 'default',
  htmlType: 'button',
  onClick: function onClick() {
    return null;
  }
};
exports.default = Button;