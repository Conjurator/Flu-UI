import React, { Component } from 'react'
import {Link} from 'react-router'
import '../static/Cover.scss'

class Cover extends Component {
  render () {
    return (
      <div className="cover-container">
        <img src="" alt="" className="cover-logo"/>
        <h2 className="cover-title">FLU-UI</h2>
        <div className="cover-link">
          <a className="link-github" target="_blank" href="https://github.com/Conjurator/Flu-UI">GitHub</a>
          <Link className="link-start" to="/layout/doc/start">Start</Link>
        </div>
        <div className="cover-desc">
          基于React的一套UI组件
        </div>
      </div>
    )
  }
}

export default Cover
