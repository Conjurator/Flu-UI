'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paginate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Paginate.scss');

var _leftGray = require('../../../svgicons/leftGray.svg');

var _leftGray2 = _interopRequireDefault(_leftGray);

var _rightGray = require('../../../svgicons/rightGray.svg');

var _rightGray2 = _interopRequireDefault(_rightGray);

var _leftPurple = require('../../../svgicons/leftPurple.svg');

var _leftPurple2 = _interopRequireDefault(_leftPurple);

var _rightPurple = require('../../../svgicons/rightPurple.svg');

var _rightPurple2 = _interopRequireDefault(_rightPurple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0 | 2017-2-20  Created by perkin // Initial version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.1 | 2017-3-23  // change pageSize and Render willProps
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * params
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * total 总条数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * pagenum 当前页数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * pagesize 一页条数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var style = {
  numberError: {
    border: '1px solid #f04134'
  }
};

var Paginate = exports.Paginate = function (_PureComponent) {
  _inherits(Paginate, _PureComponent);

  function Paginate(props) {
    _classCallCheck(this, Paginate);

    var _this = _possibleConstructorReturn(this, (Paginate.__proto__ || Object.getPrototypeOf(Paginate)).call(this, props));

    _this.selectPage = function (e) {
      var value = e.target.value,
          reg = new RegExp('^[1-9]*$');
      if (reg.test(value)) {
        if (value > _this.state.pagetotal || value === '') {
          _this.setState({ numberError: true });
        } else {
          _this.setState({
            selectNum: value,
            numberError: false
          });
        }
      } else {
        _this.setState({ numberError: true });
      }
    };

    _this.onChange = function (pagesize, pagenum) {
      var params = {
        pagesize: parseInt(pagesize || _this.state.pageSize || 5, 10),
        pagenum: parseInt(pagenum || _this.state.pageNum, 10)
      };
      _this.props.onChange(params);
    };

    _this.prePage = function () {
      if (_this.props.pagenum !== 1) {
        if (_this.state.pageNum > 1) {
          _this.setState({
            pageNum: --_this.state.pageNum
          });
        }
        _this.onChange();
      }
    };

    _this.nextPage = function () {
      if (_this.props.pagenum < _this.state.pagetotal) {
        _this.setState({
          pageNum: ++_this.state.pageNum
        });
        _this.onChange();
      }
    };

    _this.goToPage = function () {
      if (_this.state.numberError) {
        _this.setState({
          numberError: true
        });
        // Message.warn('请输入正确的跳转页码！',2)
      } else {
        _this.onChange(_this.state.pageSize, _this.state.selectNum);
      }
    };

    _this.selectPageSize = function (e) {
      var selectedIndex = e.target.selectedIndex,
          pagesize = e.target.options[selectedIndex].value,
          pagenum = 1;
      localStorage.pageSize = pagesize;
      _this.setState({
        pageSize: pagesize,
        pageNum: pagenum
      });
      _this.onChange(pagesize, pagenum);
    };

    var pageSize = props.pagesize || 8;
    var total = props.total || 100;
    _this.state = {
      numberError: false,
      //每页显示数量
      pageSize: pageSize,
      pageNum: 1,
      selectNum: '', //页面选择框
      total: total,
      simple: props.simple,
      pagetotal: Math.ceil(total / pageSize),
      leftIcon: _leftGray2.default,
      rightIcon: _rightGray2.default
    };
    return _this;
  }
  //翻页更新props


  _createClass(Paginate, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var pageSize = this.state.pageSize;

      this.setState({
        pageNum: nextProps.pagenum,
        total: nextProps.total,
        pagetotal: Math.ceil(nextProps.total / pageSize)
      });
    }
    //跳转页数

    //上一页

    //下一页


    //选择每页展示数量

  }, {
    key: 'render',

    //
    value: function render() {
      var _this2 = this;

      //页码总数
      var _state = this.state,
          simple = _state.simple,
          leftIcon = _state.leftIcon,
          rightIcon = _state.rightIcon;

      var pageNumCount = Math.ceil(this.props.total / this.state.pageSize);
      return _react2.default.createElement(
        'div',
        { className: 'paginate' },
        !simple ? _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            null,
            '\u5171\u8BA1',
            pageNumCount,
            '\u9875 / ',
            _react2.default.createElement(
              'label',
              null,
              this.props.total
            ),
            '\u6761\u603B\u6570\u636E\xA0\xA0'
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u6BCF\u9875\u5C55\u793A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'paginate-select' },
            _react2.default.createElement(
              'select',
              {
                value: this.state.pageSize,
                onChange: this.selectPageSize,
                ref: 'selectSize',
                name: 'pageSize',
                className: 'pageSize'
              },
              _react2.default.createElement(
                'option',
                { value: '3' },
                '3'
              ),
              _react2.default.createElement(
                'option',
                { value: '5' },
                '5'
              ),
              _react2.default.createElement(
                'option',
                { value: '10' },
                '10'
              ),
              _react2.default.createElement(
                'option',
                { value: '15' },
                '15'
              )
            )
          ),
          _react2.default.createElement(
            'span',
            null,
            '\u4E2A'
          ),
          _react2.default.createElement(
            'span',
            null,
            '|'
          )
        ) : '',
        _react2.default.createElement(
          'button',
          {
            style: this.state.pageNum === 1 ? { visibility: 'hidden' } : { visibility: 'visible' },
            onClick: this.prePage,
            className: 'prePage',
            onMouseEnter: function onMouseEnter() {
              _this2.setState({
                leftIcon: _leftPurple2.default
              });
            },
            onMouseLeave: function onMouseLeave() {
              _this2.setState({
                leftIcon: _leftGray2.default
              });
            }
          },
          _react2.default.createElement('img', { src: leftIcon })
        ),
        _react2.default.createElement(
          'span',
          null,
          this.state.pageNum,
          ' / ',
          pageNumCount
        ),
        _react2.default.createElement(
          'button',
          {
            style: this.state.pageNum === this.state.pagetotal ? { visibility: 'hidden' } : { visibility: 'visible' },
            onClick: this.nextPage,
            className: 'nextPage',
            onMouseEnter: function onMouseEnter() {
              _this2.setState({
                rightIcon: _rightPurple2.default
              });
            },
            onMouseLeave: function onMouseLeave() {
              _this2.setState({
                rightIcon: _rightGray2.default
              });
            }
          },
          _react2.default.createElement('img', { src: rightIcon })
        ),
        _react2.default.createElement('input', {
          style: this.state.numberError ? style.numberError : {},
          className: 'pageInput',
          type: 'text',
          onChange: this.selectPage
        }),
        _react2.default.createElement(
          'button',
          { onClick: this.goToPage, className: 'goToPage' },
          '\u8DF3\u8F6C'
        )
      );
    }
  }]);

  return Paginate;
}(_react.PureComponent);

exports.default = Paginate;