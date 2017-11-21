import React from 'react'
import SideMenu from './SideMenu'
import Content from "./Content";
import '../static/Components.scss'

export default function Components(props) {
  const {pageData, utils} = props
  console.log(props)
  return (
    <div className="components">
      <SideMenu data={props.data} type="components" params={props.params} />
      <div className="component-container">
        <Content pageData={pageData} utils={utils} ></Content>
      </div>
    </div>
  )
}
