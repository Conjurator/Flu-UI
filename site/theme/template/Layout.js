import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../static/Layout.scss'

export default function Layout(props) {
  const {location} = props
  return (
    <div className="wrapper">
      <Header location={location} />
      <div className="layout">{props.children}</div>
      <Footer />
    </div>
  )
}
