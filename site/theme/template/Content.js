import React from "react"
import "../static/Content.scss"

export default function Content(props) {
  const pageData = props.pageData.index || props.pageData
  const demos = props.pageData.demo
  console.log(demos)
  const { content } = pageData
  const title = pageData.meta.title
  return (
    <div className="content">
      {title && <h2>{title}</h2>}
      <div id="wrapper">{props.utils.toReactComponent(content)}</div>
    </div>
  )
}
