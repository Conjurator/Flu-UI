import React from 'react'
import { storiesOf } from '@storybook/react'
import './Svg.scss'

const req = require.context('../svgicons', true, /\.svg$/)

let svgList = []

req.keys().forEach(fileName => {
  let svg = req(fileName)
  let name = fileName.slice(2).replace('.svg', '')
  svgList.push({
    src: svg.default || svg,
    name
  })
})

storiesOf('Svgs', module).add('svgs', () => (
  <div className="box">
    {svgList.map((svg, index) => {
      return <div className="svg-container" key={index}>
        <div className="title">{svg.name}</div>
        <img src={svg.src} alt=""/>
      </div>
    })}
  </div>
))
