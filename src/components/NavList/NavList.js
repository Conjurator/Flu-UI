import React, { PureComponent } from 'react'
import Menu from './Menu'

class NavList extends PureComponent {
  render() {
    let { pathname, navList } = this.props
    return (
      <div>
        <div className="nav-list">
          {navList.map((menu, index) => <Menu pathname={pathname} key={index} {...menu} />)}
        </div>
      </div>
    )
  }
}

export default NavList
