/**
 * Copyright (c) 2017-Now MIUI, All rights reseved.
 * @fileoverview PGC想看开放平台-图片等媒体文件上传组件
 * @version 1.0 | 2017-1-22  // Initial version.
 * @version 1.1 | 2017-3-16  // update view and delete and input clear bug
 * @version 1.2 | 2017-3-20  // img upload success and view hover bug
**/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message'
import addBig from '../../../svgicons/addBig.svg'
import enlarge from '../../../svgicons/enlarge.svg'
import trash from '../../../svgicons/trash.svg'
import './Uploader.scss'
//模态层组件
import Modal from '../Modal/Modal'
//
const styles = {
  viewIdAvDialog: {
    width: '100%',
    margin: '0 auto',
    maxHeight: '600px'
  }
}
export class Uploader extends Component {
  static defaultProps = {
    multiple: true
  }
  static propTypes = {
    onUploadChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool
  }
  constructor(props) {
    super(props)
    this.state = {
      imgView: props.imgSrc ? props.imgSrc : null,
      visible: false
    }
  }
  //main function
  handleUploadFile = e => {
    //e.preventDefault();
    if (window.FileReader) {
      var file = e.target.files[0],
        reader = new FileReader()
      if (file.size > 1024 * 1024 * 2) {
        Message.warning('图片大小不能超过2MB哦！', 2)
        return false
      }
      if (file && file.type.match('image.*')) {
        reader.readAsDataURL(file)
      }
    }
    const _this = this
    reader.onloadend = function(e) {
      //预览上传图片数据
      _this.setState({
        imgView: reader.result
      })
      //向父组件传递数据
      _this.props.onUploadChange(_this.state.imgView, e)
    }
    function imgLoaded() {
      this.refs.fileInput('change', _this.props.onUploadChange, false)
    }
    window.addEventListener('DOMContentLoaded', imgLoaded, false)
  }
  //uploadImg delete
  handleImgDelete = e => {
    this.setState({
      imgView: null
    })
    //清掉图片选择框input的value值
    this.refs.fileInput.value = null
    //并向父组件传递空数据
    this.props.onUploadChange(null, e)
  }
  //img view
  handleImgOpenModal = () => {
    this.setState({
      visible: true
    })
  }
  //Modal
  handleOk = e => {
    this.setState({
      visible: false
    })
  }
  handleCancel = e => {
    this.setState({
      visible: false
    })
  }
  //
  render() {
    return (
      <div>
        {this.state.imgView &&
          <div className="thumbs-box">
            <a href="javascript:;">
              <img src={this.state.imgView} />
            </a>
            <span className="icons-box">
              <img
                src={enlarge}
                alt="预览大图"
                onTouchTap={this.handleImgOpenModal}
              />
              <img src={trash} alt="删除图片" onTouchTap={this.handleImgDelete} />
            </span>
          </div>}
        <div className="xk_uploader">
          <span className="xk_upload_box">
            <input
              type="file"
              ref="fileInput"
              accept="image/jpg,image/jpeg,image/png"
              multiple={this.props.multiple}
              className="xk_upload_input"
              onChange={this.handleUploadFile.bind(this)}
            />
            <img className="xk-uploader-trigger" src={addBig} alt="" />
            <p>只能上传一张图片</p>
            <p>支持PNG/JPG/JPEG格式</p>
          </span>
        </div>
        <Modal
          title="上传大图预览"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="vertical-center-modal"
          footer={[]}
        >
          <img src={this.state.imgView} style={styles.viewIdAvDialog} />
        </Modal>
      </div>
    )
  }
}

Uploader.propTypes = {}

export default Uploader
