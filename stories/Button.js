import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../src/components/Button'

storiesOf('Button', module)
  .add('default', () => <Button>默认按钮</Button>)
  .add('primary', () => <Button onClick={action('clicked')} type="primary">主按钮</Button>)
  .add('large', () => <Button size='large'>大号按钮</Button>)
