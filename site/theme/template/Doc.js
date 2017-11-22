import React from 'react'
import SideMenu from './SideMenu'
import Content from "./Content";
import '../static/Doc.scss'

export default function Doc(props) {
  const {pageData, utils} = props
  return (
    <div className="doc">
      <SideMenu data={props.data} type="doc" params={props.params} />
      <div className="doc-container">
      <Content pageData={pageData} utils={utils} ></Content>
      </div>
    </div>
  )
}
