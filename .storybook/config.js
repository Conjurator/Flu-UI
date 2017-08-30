/* eslint-disable import/extensions */

import { configure } from '@storybook/react'
import './storybook.scss'

function loadStories() {
  require('../stories/Button'),
  require('../stories/Input'),
  require('../stories/Message'),
  require('../stories/Dates')
  require('../stories/Card')
}

configure(loadStories, module)
