import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../src/components/Card'
import { withDocs } from 'storybook-readme'
import ButtonDoc from '../src/components/Card/index.md'

storiesOf('Card', module)
  .addDecorator(story => <div style={{ backgroundColor: '#eeeeee', position: 'relative', padding: 20 }}>{story()}</div>)
  .addDecorator(withDocs(ButtonDoc))
  .add('default', () => (
    <Card>
      <div>这是一个card</div>
    </Card>
  ))
  .add('with title', () => (
    <Card title="新增访问量">
      <div>这是一个带titlle的card</div>
    </Card>
  ))
