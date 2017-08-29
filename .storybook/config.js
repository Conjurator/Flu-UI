/* eslint-disable import/extensions */

import { configure } from '@storybook/react'
import './storybook.scss'

function loadStories() {
  require('../stories/Button')
  require('../stories/Dates')
  require('../stories/Card')
}

configure(loadStories, module)
