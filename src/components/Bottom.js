import React from 'react';


class Bottom extends React.Component {
  render() {
	return(
		<div id='holdDays' className="bottom">
			<button data-text="DAYS" id='toDays' onClick={this.props.handleDays}>DAYS</button>
	        <button data-text="MONTHS" id='toMonths' onClick={this.props.handleMonths}>MONTHS</button>
	        <button data-text="YEARS" id='toYears' onClick={this.props.handleYears}>YEARS</button>
		</div>
	)
  }
}

export default Bottom