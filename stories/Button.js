import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../src/components/Button'
import { withDocs } from 'storybook-readme'
import ButtonDoc from '../src/components/Button/index.md'

function Container(props) {
  return <div style={{ display: 'flex', justifyContent: 'space-around', height: 140, alignItems: 'center' }}>{props.children}</div>
}

storiesOf('Button', module)
  .addDecorator(withDocs(ButtonDoc))
  .add('type', () => (
    <Container>
      <Button>默认</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
    </Container>
  ))
  .add('size', () => (
    <Container>
      <Button>默认</Button>
      <Button size="small">小号按钮</Button>
      <Button size="large">大号按钮</Button>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Button disabled="true">默认按钮</Button>
      <Button type="primary" disabled="true">主要按钮</Button>
      <Button type="secondary" disabled="true">次要按钮</Button>
    </Container>
  ))
