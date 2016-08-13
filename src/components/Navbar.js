import React, { Component } from 'react';

var navbarStyle = {
	background: "#fff",
	width: "100%",
	height: "50px",
	borderTop: "1px solid #999999",
	borderBottom: "1px solid #999999"
};

var logoStyle = {
	lineHeight: "50px",
	textAlign: "center",
	height: "50px",
	width: "300px",
	borderRight: "1px solid #999999",
	float: "left"
};

var menuLeftStyle = {
	listStyle: "none",
	height: "50px",
	margin: "0",
	padding: "0"
};

var menuLeftItems = {
	height: "50px",
	paddingLeft: "20px",
	paddingRight: "20px",
	display: "inline-block",
	lineHeight: "50px",
	borderRight: "1px solid #999999",
};

var menuRightStyle = {
	listStyle: "none",
	height: "50px",
	margin: "0",
	padding: "0",
	float: "right",
	marginTop: "-50px"
};

var menuRightItems = {
	height: "50px",
	paddingLeft: "20px",
	paddingRight: "20px",
	display: "inline-block",
	lineHeight: "50px",
	borderLeft: "1px solid #999999",
};

class Navbar extends Component {

  render() {
    return (
      <div style={ navbarStyle }>
      	
      	<div style={ logoStyle }> LeadOnward </div>

      	<ul style={ menuLeftStyle }> 
      		<li style={ menuLeftItems }> Topics </li>
      		<li style={ menuLeftItems }> This is a menu item </li>
      	</ul>

      	<ul style={ menuRightStyle }> 
      		<li style={ menuRightItems }> Login </li>
      		<li style={ menuRightItems }> Register </li>
      	</ul>

      </div>
    );
  }

}

export default Navbar;