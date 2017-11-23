import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from '../src/components/Badge/Badge'
import { withDocs } from 'storybook-readme'
import BadgeDoc from '../src/components/Badge/index.md'

const BadgeBox = props => (
  <div
    style={{
      display: 'inline-block',
      position: 'relative',
      width: 100,
      height: 50,
      border: '1px solid #828282',
      margin: '0 50px'
    }}
  >
    {props.children}
  </div>
)

storiesOf('Badge', module)
  .addDecorator(withDocs(BadgeDoc))
  .add('default', () => (
    <div>
      <BadgeBox>
        <Badge count={5} />
      </BadgeBox>
      <BadgeBox>
        <Badge count={101} />
      </BadgeBox>
      <BadgeBox>
        <Badge count={11} dot={true} />
      </BadgeBox>
      <BadgeBox>
        <Badge count={0} showZero={true} />
      </BadgeBox>
    </div>
  ))
