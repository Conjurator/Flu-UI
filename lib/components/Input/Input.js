'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Input.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function reviseControlledValue(value) {
  if (value === null || typeof value === 'undefined') return '';
  return value;
}

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      inputStyles: null
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'focus',
    value: function focus() {
      this.refs.input.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          state = this.state;
      var opts = {};
      if (props.disabled) {
        opts.readOnly = 'readonly';
      }
      switch (props.type) {
        case 'textarea':
          return _react2.default.createElement(
            'div',
            {
              style: Object.assign({}, props.style, this.state.inputStyles),
              className: 'fluui_controls ' + (props.inputContainerClass || '')
            },
            _react2.default.createElement(
              'span',
              { className: 'xk_text_box xk_textarea_box' },
              _react2.default.createElement('textarea', _extends({
                ref: 'textarea',
                value: props.value,
                className: 'xk_textarea',
                type: props.type || 'text',
                onChange: props.onChange,
                onBlur: props.onBlur,
                onFocus: props.onFocus
              }, opts, {
                placeholder: props.placeholder,
                maxLength: props.maxLength
              }))
            ),
            props.info
          );
        default:
          return _react2.default.createElement(
            'div',
            {
              style: Object.assign({}, props.style, state.inputStyles),
              className: 'fluui_controls ' + (props.inputContainerClass || '')
            },
            _react2.default.createElement(
              'span',
              { className: 'xk_text_box xk_input_box' },
              _react2.default.createElement('input', _extends({
                ref: 'input',
                value: props.value,
                className: (0, _classnames2.default)('xk_input', {
                  xk_input_readonly: props.disabled
                }),
                type: props.type || 'text',
                defaultValue: props.defaultValue,
                onChange: props.onChange,
                onBlur: props.onBlur,
                onFocus: props.onFocus,
                placeholder: props.placeholder,
                maxLength: props.maxLength
              }, opts))
            ),
            props.info
          );
      }
    }
  }]);

  return Input;
}(_react.Component);

Input.defaultProps = {
  disabled: false,
  prefix: 'fluui'
};
Input.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  disabled: _propTypes2.default.bool,
  value: _propTypes2.default.any,
  type: _propTypes2.default.string
};
exports.default = Input;