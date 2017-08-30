import React from 'react'
import { storiesOf } from '@storybook/react'
import './Svg.scss'

const req = require.context('../svgicons', true, /\.svg$/)

let svgList = []

req.keys().forEach(fileName => {
  let svg = req(fileName)
  svgList.push(svg.default)
})

storiesOf('Svgs', module)
  .add('svgs', () => <div className='svg-box'>
    {
      svgList.map((Svg, index) => <Svg key={index} />)
    }
  </div>)
