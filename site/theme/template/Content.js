import React from 'react'
import '../static/Content.scss'

export default function Content(props) {
  const pageData = props.pageData.index || props.pageData
  const {content} = pageData
  const title = pageData.meta.title
  return <div className="content">
    <h1>{title}</h1>
    <div id="wrapper">
      {props.utils.toReactComponent(content)}
    </div>
  </div>
}
