import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../src/components/Card'
import { withDocs } from 'storybook-readme'
import ButtonDoc from '../src/components/Card/index.md'

function Container(props) {
  return (
    <div
      style={{
        backgroundColor: '#eeeeee',
        position: 'relative',
        padding: 20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      {props.children}
    </div>
  )
}

storiesOf('Card', module)
  .addDecorator(withDocs(ButtonDoc))
  .add('default', () => (
    <Container>
      <Card>
        <div>这是一个card</div>
      </Card>
      <Card title="新增访问量">
        <div>这是一个带titlle的card</div>
      </Card>
    </Container>
  ))
