import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../src/components/Card'

storiesOf('Card', module)
  .add('default', () =>
      <Card>
        <div>这是一个card</div>
      </Card>
  )
  .add('with title', () =>
    <Card title="新增访问量">
      <div>这是一个带titlle的card</div>
    </Card>
  )
