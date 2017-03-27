import React from 'react';


class Bottom extends React.Component {
	handleDays() {
		var bt = document.getElementById('time');
		var unit = document.getElementById('unit');
		unit.innerHTML = "";
		bt.classList.add('drop1');
		unit.classList.add('drop2');
		var dizzays = document.getElementById('holdDays').getAttribute('data-days');
		bt.innerHTML = dizzays;
		if(dizzays === "1") {
			unit.innerHTML = "Day";
		} else {
			unit.innerHTML = "Days";
		}
		setTimeout(function(){
			bt.classList.remove('drop1');
			unit.classList.remove('drop2');
		}, 500);
	}
	handleMonths() {
		var bt = document.getElementById('time');
		var unit = document.getElementById('unit');
		bt.classList.add('drop1');
		unit.classList.add('drop2');
		var dizzays = document.getElementById('holdDays').getAttribute('data-days');
		var months = Math.floor(dizzays/30);
		if(months === 1) {
			unit.innerHTML = "Month";
		} else {
			unit.innerHTML = "Months";
		}
		bt.innerHTML = months;
		setTimeout(function(){
			bt.classList.remove('drop1');
			unit.classList.remove('drop2');
		}, 500);
	}
	handleYears() {
		var bt = document.getElementById('time');
		var unit = document.getElementById('unit');
		bt.classList.add('drop1');
		unit.classList.add('drop2');
		var dizzays = document.getElementById('holdDays').getAttribute('data-days');
		var years = Math.floor(dizzays/365);
		if(years === 1) {
			unit.innerHTML = "Year";
		} else {
			unit.innerHTML = "Years";
		}
		bt.innerHTML = years;
		setTimeout(function(){
			bt.classList.remove('drop1');
			unit.classList.remove('drop2');
		}, 500);
	}
	render() {
		return(
			<div id='holdDays' className="bottom">
				<button data-text="DAYS" id='toDays' onClick={this.handleDays.bind(this)}>DAYS</button>
	            <button data-text="MONTHS" id='toMonths' onClick={this.handleMonths.bind(this)}>MONTHS</button>
	            <button data-text="YEARS" id='toYears' onClick={this.handleYears.bind(this)}>YEARS</button>
			</div>
		)
	}
}

export default Bottom