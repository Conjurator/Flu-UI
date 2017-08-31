import React from 'react'
import { storiesOf } from '@storybook/react'
import Steps from '../src/components/Steps'

const Step = Steps.Step

storiesOf('Steps', module)
  .add('defalult', () => (
    <Steps current={1}>
      <Step label="步骤一" />
      <Step label="步骤二" />
      <Step label="步骤三" />
      <Step label="步骤四" />
    </Steps>
  ))
  .add('number', () => (
    <Steps current={0} stepType='number'>
      <Step label="步骤一" />
      <Step label="步骤二" />
      <Step label="步骤三" />
      <Step label="步骤四" />
    </Steps>
  ))
