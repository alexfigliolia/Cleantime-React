import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
	render() {
		return(
			<header>
				<h1 id='logo'>CleanTime</h1>
				<div id="chip">
					<p id='chipT'>Green<br/>Chip</p>
				</div>
			</header>
		)
	}
}

export default Header