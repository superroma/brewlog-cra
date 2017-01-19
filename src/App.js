import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
//import {BatchesView} from './BatchesView'

const NavLink = (props) => (
  <Link {...props} className="nav-item nav-link" activeClassName="active"/>
)
const NavBar = () => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">Brew Log</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/batches">Batches</NavLink>
        <NavLink to="/batchdetails">Batch Details</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  </nav>
)

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = { children: PropTypes.object.isRequired }
