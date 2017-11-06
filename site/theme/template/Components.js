import React from 'react'
import SideMenu from './SideMenu'
import '../static/Components.scss'

export default function Components(props) {
  return (
    <div className="components">
      <SideMenu data={props.data} type="components" params={props.params} />
      <div className="component-container">doc</div>
    </div>
  )
}
