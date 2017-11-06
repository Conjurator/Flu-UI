import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import '../static/SideMenu.scss'

export default function SideMenu({ data, type, params }) {
  const menuList = Object.keys(data[type])
  return (
    <ul className="side-menu">
      {menuList.map(item => (
        <li className={classnames({ active: params[type] === item })} key={item}>
          <Link to={`layout/${type}/${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )
}
