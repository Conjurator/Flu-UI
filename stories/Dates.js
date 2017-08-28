import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { SingleDatePicker } from '../src/components/Dates'

storiesOf('SingleDatePicker', module).add('default', () =>
  <SingleDatePicker onDateChange={action('date change')} focused={false} onFocusChange={action('focus change')} />
)
