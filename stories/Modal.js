import React from 'react'
import { storiesOf } from '@storybook/react'
import Modal from '../src/components/Modal'
import { action } from '@storybook/addon-actions'
import './Modal.scss'

storiesOf('Modal', module).add('default', () => (
  <Modal
    width={400}
    wrapClassName='dialog'
    visible={true}
    maskClosable={true}
    onClose={action('click close')}
    title="弹窗标题"
  >
    <div className="content">
      弹窗内容，XXXXXXXXXXXXXXXX
    </div>
  </Modal>
))
