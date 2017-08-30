import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from '../src/components/Input'

storiesOf('Input', module)
  .add('default', () => <Input placeholder="请输入"  onChange={action('changed')}></Input>)
  .add('textarea', () => <Input type="textarea" maxLength={20}></Input>)
  .add('readOnly',() => <div>
      <Input disabled={true} value="只读不可修改"></Input>
      <br/>
      <Input type="textarea" disabled={true} value="只读不可修改"></Input>
    </div>)
