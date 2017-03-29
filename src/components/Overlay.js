import React from 'react';
import '../css/Overlay.css';


class Overlay extends React.Component {
  getClean(){
    var d = new Date();
    var y = d.getFullYear();
    var input = this.refs.myInput;
    var val = input.value;
    var reg = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;
    var year = val.substring(0, 4);
    if( reg.test(val) === true && year > 1900 && year <= y) {
      console.log('good');
      this.props.cleanTime(val);
    } else {
      console.log('no good');
    }
  }
	render(){
		return (
			<div className={this.props.classes}>
        <div className={this.props.centerClasses}>
          <h3>Enter Your Sobriety Date</h3>
          <input ref="myInput" type="date" onBlur={this.getClean.bind(this)}/>
          <button onClick={this.getClean.bind(this)}>GO!</button>
        </div>
      </div>
		)
	}
}

export default Overlay
