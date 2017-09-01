import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Uploader from '../src/components/Uploader'

storiesOf('Uploader', module).add('default', () => (
  <Uploader imgSrc="" onUploadChange={action('upload change')} multiple={false} />
))
