import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import goRight from 'fluui/svgicons/goRight.svg'
import goDown from 'fluui/svgicons/goDown.svg'
import ClassNames from 'classnames'
import './Menu.scss'

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showChildNav: true
    }
  }
  isRouteMatch = (link, pathname,moduleLinkTrait) => {
    if(link===pathname){
      return true;
    }else{
      if(moduleLinkTrait&&pathname.includes(moduleLinkTrait)){
        return true
      }
    }
    return false;
  }
  render() {
    let { icon, label, link, moduleLinkTrait, pathname, subMenus } = this.props
    let { showChildNav } = this.state
    return (
      <div>
        <Link
          onClick={() => this.setState({ showChildNav: !showChildNav })}
          className={ClassNames('nav-menu', {
            active: this.isRouteMatch(link, pathname,moduleLinkTrait) && (!subMenus || !showChildNav)
          })}
          to={link}
        >
          {icon && <img src={icon} className="nav-menu-icon" alt="icon" />}
          <div className="nav-menu-label">
            {label}
          </div>
          <div className="nav-menu-arraw">
            <img src={showChildNav && subMenus ? goDown : goRight} alt="" />
          </div>
          <div className="triangle" />
        </Link>
        {showChildNav &&
          subMenus &&
          subMenus.map((child, index) =>{
            return <Link
              key={index}
              className={ClassNames('nav-menu child-menu', {
                active: this.isRouteMatch(child.link, pathname,child.moduleLinkTrait)
              })}
              to={child.link}
            >
              <div className="nav-menu-label">
                {child.label}
              </div>
              <div className="triangle" />
            </Link>
          })}
      </div>
    )
  }
}

export default Menu
