'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Uploader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Message = require('../Message/Message');

var _Message2 = _interopRequireDefault(_Message);

var _addBig = require('../../../svgicons/addBig.svg');

var _addBig2 = _interopRequireDefault(_addBig);

var _enlarge = require('../../../svgicons/enlarge.svg');

var _enlarge2 = _interopRequireDefault(_enlarge);

var _trash = require('../../../svgicons/trash.svg');

var _trash2 = _interopRequireDefault(_trash);

require('./Uploader.scss');

var _Modal = require('../Modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017-Now MIUI, All rights reseved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview PGC想看开放平台-图片等媒体文件上传组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0 | 2017-1-22  // Initial version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.1 | 2017-3-16  // update view and delete and input clear bug
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.2 | 2017-3-20  // img upload success and view hover bug
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/

//模态层组件


//
var styles = {
  viewIdAvDialog: {
    width: '100%',
    margin: '0 auto',
    maxHeight: '600px'
  }
};

var Uploader = exports.Uploader = function (_Component) {
  _inherits(Uploader, _Component);

  function Uploader(props) {
    _classCallCheck(this, Uploader);

    var _this2 = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this, props));

    _this2.handleUploadFile = function (e) {
      //e.preventDefault();
      if (window.FileReader) {
        var file = e.target.files[0],
            reader = new FileReader();
        if (file.size > 1024 * 1024 * 2) {
          _Message2.default.warning('图片大小不能超过2MB哦！', 2);
          return false;
        }
        if (file && file.type.match('image.*')) {
          reader.readAsDataURL(file);
        }
      }
      var _this = _this2;
      reader.onloadend = function (e) {
        //预览上传图片数据
        _this.setState({
          imgView: reader.result
        });
        //向父组件传递数据
        _this.props.onUploadChange(_this.state.imgView, e);
      };
      function imgLoaded() {
        this.refs.fileInput('change', _this.props.onUploadChange, false);
      }
      window.addEventListener('DOMContentLoaded', imgLoaded, false);
    };

    _this2.handleImgDelete = function (e) {
      _this2.setState({
        imgView: null
      });
      //清掉图片选择框input的value值
      _this2.refs.fileInput.value = null;
      //并向父组件传递空数据
      _this2.props.onUploadChange(null, e);
    };

    _this2.handleImgOpenModal = function () {
      _this2.setState({
        visible: true
      });
    };

    _this2.handleOk = function (e) {
      _this2.setState({
        visible: false
      });
    };

    _this2.handleCancel = function (e) {
      _this2.setState({
        visible: false
      });
    };

    _this2.state = {
      imgView: props.imgSrc ? props.imgSrc : null,
      visible: false
    };
    return _this2;
  }
  //main function

  //uploadImg delete

  //img view

  //Modal


  _createClass(Uploader, [{
    key: 'render',

    //
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.imgView && _react2.default.createElement(
          'div',
          { className: 'thumbs-box' },
          _react2.default.createElement(
            'a',
            { href: 'javascript:;' },
            _react2.default.createElement('img', { src: this.state.imgView })
          ),
          _react2.default.createElement(
            'span',
            { className: 'icons-box' },
            _react2.default.createElement('img', {
              src: _enlarge2.default,
              alt: '\u9884\u89C8\u5927\u56FE',
              onTouchTap: this.handleImgOpenModal
            }),
            _react2.default.createElement('img', { src: _trash2.default, alt: '\u5220\u9664\u56FE\u7247', onTouchTap: this.handleImgDelete })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'xk_uploader' },
          _react2.default.createElement(
            'span',
            { className: 'xk_upload_box' },
            _react2.default.createElement('input', {
              type: 'file',
              ref: 'fileInput',
              accept: 'image/jpg,image/jpeg,image/png',
              multiple: this.props.multiple,
              className: 'xk_upload_input',
              onChange: this.handleUploadFile.bind(this)
            }),
            _react2.default.createElement('img', { className: 'xk-uploader-trigger', src: _addBig2.default, alt: '' }),
            _react2.default.createElement(
              'p',
              null,
              '\u53EA\u80FD\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u652F\u6301PNG/JPG/JPEG\u683C\u5F0F'
            )
          )
        ),
        _react2.default.createElement(
          _Modal2.default,
          {
            title: '\u4E0A\u4F20\u5927\u56FE\u9884\u89C8',
            visible: this.state.visible,
            onOk: this.handleOk,
            onCancel: this.handleCancel,
            wrapClassName: 'vertical-center-modal',
            footer: []
          },
          _react2.default.createElement('img', { src: this.state.imgView, style: styles.viewIdAvDialog })
        )
      );
    }
  }]);

  return Uploader;
}(_react.Component);

Uploader.defaultProps = {
  multiple: true
};
Uploader.propTypes = {
  onUploadChange: _propTypes2.default.func.isRequired,
  multiple: _propTypes2.default.bool
};


Uploader.propTypes = {};

exports.default = Uploader;