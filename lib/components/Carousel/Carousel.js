'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Carousel.scss');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0 | 2017-2-20  Created by perkin // Initial version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.1 | 2017-3-23  // change pageSize and Render willProps
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Carousel = exports.Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this2 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this2.adjustHeight = function () {
      _this2.refs.carouselRoot.style.height = _this2.refs.carouselRoot.offsetWidth * 0.243589744 + 'px';
    };

    _this2.startAnimate = function () {
      if (_this2.animateId) return;
      var _this = _this2;

      var id = setInterval(function () {
        _this.setState({
          active: 1 + _this.state.active < _this2.state.imagesSrc.length ? 1 + _this.state.active : 0
        });
      }, 5000);
      _this2.setState({
        animateId: id
      });
    };

    _this2.gotoUrl = function () {
      _reactRouter.browserHistory.push(_this2.props.imagesSrc[_this2.state.active].href);
    };

    _this2.state = {
      imagesSrc: props.imagesSrc ? props.imagesSrc : [],
      urls: props.urls ? props.urls : [],
      active: props.active ? props.active : 0
    };
    return _this2;
  }

  _createClass(Carousel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.imagesSrc && nextProps.imagesSrc instanceof Array && nextProps.imagesSrc.length > 0) {
        //如果图片发生改变，则进行切换
        this.setState({
          imagesSrc: nextProps.imagesSrc,
          active: 0,
          style: {
            display: 'block'
          }
        });
      } else {
        this.setState({
          style: {
            display: 'none'
          }
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startAnimate();
      window.addEventListener('resize', this.adjustHeight, false);
      this.adjustHeight();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.state.animateId);
      window.removeEventListener('resize', this.adjustHeight);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          imagesSrc = _state.imagesSrc,
          active = _state.active;

      return _react2.default.createElement(
        'div',
        {
          ref: 'carouselRoot',
          onMouseOver: function onMouseOver() {
            clearInterval(_this3.state.animateId);
            _this3.setState({
              animateId: NaN
            });
          },
          onMouseLeave: function onMouseLeave() {
            _this3.startAnimate();
          },
          style: Object.assign({}, this.props.style, this.state.style),
          className: 'fluCarousel'
        },
        imagesSrc.map(function (value, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: (0, _classnames2.default)({ singleImg: true, active: active === index }) },
            _react2.default.createElement('img', { src: value.url, onClick: _this3.gotoUrl, alt: '' })
          );
        }),
        _react2.default.createElement(
          'div',
          { className: 'switch' },
          imagesSrc.map(function (value, index) {
            return _react2.default.createElement('div', {
              onClick: function onClick() {
                _this3.setState({
                  active: index
                });
              },
              className: (0, _classnames2.default)({ indexBlock: true, active: active === index }),
              key: index
            });
          })
        )
      );
    }
  }]);

  return Carousel;
}(_react.Component);

exports.default = Carousel;