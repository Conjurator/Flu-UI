'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _goRight = require('fluui/svgicons/goRight.svg');

var _goRight2 = _interopRequireDefault(_goRight);

var _goDown = require('fluui/svgicons/goDown.svg');

var _goDown2 = _interopRequireDefault(_goDown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Menu.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_PureComponent) {
  _inherits(Menu, _PureComponent);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.isRouteMatch = function (link, pathname, moduleLinkTrait) {
      if (link === pathname) {
        return true;
      } else {
        if (moduleLinkTrait && pathname.includes(moduleLinkTrait)) {
          return true;
        }
      }
      return false;
    };

    _this.state = {
      showChildNav: true
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          label = _props.label,
          link = _props.link,
          moduleLinkTrait = _props.moduleLinkTrait,
          pathname = _props.pathname,
          subMenus = _props.subMenus;
      var showChildNav = this.state.showChildNav;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          {
            onClick: function onClick() {
              return _this2.setState({ showChildNav: !showChildNav });
            },
            className: (0, _classnames2.default)('nav-menu', {
              active: this.isRouteMatch(link, pathname, moduleLinkTrait) && (!subMenus || !showChildNav)
            }),
            to: link
          },
          icon && _react2.default.createElement('img', { src: icon, className: 'nav-menu-icon', alt: 'icon' }),
          _react2.default.createElement(
            'div',
            { className: 'nav-menu-label' },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-menu-arraw' },
            _react2.default.createElement('img', { src: showChildNav && subMenus ? _goDown2.default : _goRight2.default, alt: '' })
          ),
          _react2.default.createElement('div', { className: 'triangle' })
        ),
        showChildNav && subMenus && subMenus.map(function (child, index) {
          return _react2.default.createElement(
            _reactRouter.Link,
            {
              key: index,
              className: (0, _classnames2.default)('nav-menu child-menu', {
                active: _this2.isRouteMatch(child.link, pathname, child.moduleLinkTrait)
              }),
              to: child.link
            },
            _react2.default.createElement(
              'div',
              { className: 'nav-menu-label' },
              child.label
            ),
            _react2.default.createElement('div', { className: 'triangle' })
          );
        })
      );
    }
  }]);

  return Menu;
}(_react.PureComponent);

exports.default = Menu;