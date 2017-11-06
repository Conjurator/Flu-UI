import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import logo from '../static/image/logo.png'
import '../static/Header.scss'

export default function Header(props) {
  let path = props.location.pathname
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li
          className={classNames({
            active: path.includes('/doc')
          })}
        >
          <Link to="/layout/doc/start">开始</Link>
        </li>
        <li
          className={classNames({
            active: path.includes('/components')
          })}
        >
          <Link to="/layout/components/Button">组件</Link>
        </li>
      </ul>
    </header>
  )
}
