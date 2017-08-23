'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _svgMap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OKGray = require('../../../svgicons/OKGray.svg');

var _OKGray2 = _interopRequireDefault(_OKGray);

var _OK = require('../../../svgicons/OK.svg');

var _OK2 = _interopRequireDefault(_OK);

var _OKOrange = require('../../../svgicons/OKOrange.svg');

var _OKOrange2 = _interopRequireDefault(_OKOrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PROCESS = 'process';
var FINISH = 'finish';
var WAIT = 'wait';

var svgMap = (_svgMap = {}, _defineProperty(_svgMap, FINISH, _OKOrange2.default), _defineProperty(_svgMap, PROCESS, _OK2.default), _defineProperty(_svgMap, WAIT, _OKGray2.default), _svgMap);

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass(Step, [{
    key: 'getStatus',
    value: function getStatus() {
      var _props = this.props,
          index = _props.index,
          current = _props.current;

      if (index === current) {
        return PROCESS;
      }
      if (index < current) {
        return FINISH;
      }
      return WAIT;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          stepType = _props2.stepType,
          index = _props2.index;

      var status = this.getStatus();

      return _react2.default.createElement(
        'div',
        { className: 'xk-step xk-' + status },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('xk-step-head', {
              noBorder: stepType === 'checkmark'
            })
          },
          stepType === 'checkmark' ? _react2.default.createElement('img', { src: svgMap[status], alt: '' }) : index + 1
        ),
        _react2.default.createElement(
          'div',
          { className: 'xk-step-label' },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'xk-step-tail' },
          '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'
        )
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;