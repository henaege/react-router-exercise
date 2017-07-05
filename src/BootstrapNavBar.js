import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Images from './Images'


class BootstrapNavBar extends Component{
  render(){
    return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">Atlanta!</a>
						</div>
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/images">Images</Link></li>
							<li><Link to="/weather">Weather</Link></li>
							<li><Link to="/mayor">From the Mayor</Link></li>
							<li><Link to="/four">Four</Link></li>
						</ul>
					</div>
				</nav> 
			</div>
	)
  }
}

export default BootstrapNavBar