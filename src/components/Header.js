import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
	render() {
		return(
			<header>
				<h1 id='logo' style={{color: this.props.burgerColor}}>CleanTime</h1>
				<div id="chip" style={{background: this.props.chipColor}}>
					<p id='chipT' style={{color: this.props.textColor}}>{this.props.chipText1}<br/>{this.props.chipText2}</p>
				</div>
			</header>
		)
	}
}

export default Header