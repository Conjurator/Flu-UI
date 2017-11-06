import React from 'react'
import SideMenu from './SideMenu'
import '../static/Doc.scss'

export default function Doc(props) {
  console.log(props)
  
  return (
    <div className="doc">
      <SideMenu data={props.data} type="doc" params={props.params} />
      <div className="doc-container">doc</div>
    </div>
  )
}
