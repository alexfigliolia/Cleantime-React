import React from 'react';
import '../css/Banner.css';


class Banner extends React.Component {
	render() {
		return(
			<div className="banner">
				<div className="centering">
					<h1 id='time' className={this.props.timeClasses}>{this.props.cleantime}</h1>
					<h2 id='unit' className={this.props.unitClasses}>{this.props.unit}</h2>
				</div>
			</div>
		)
	}
}

export default Banner