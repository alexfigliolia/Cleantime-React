import React from 'react';
import '../css/Overlay.css';


class Overlay extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      input: "",
      daysSober: null
    }
  }
  handleClick(){
    var mm = this.state.daysSober;
    var oneDay = 24*60*60*1000;
    var firstDate = new Date();
    var secondDate = new Date(mm);
    var unit =  document.getElementById('unit');
    var h = document.getElementById('hamburger');
    var time = document.getElementById('time');
    var diffDays = (Math.round (Math.abs( (firstDate.getTime() - secondDate.getTime() ) / (oneDay) )))-1;
    this.setState( { daysSober : 0 + diffDays }, function(){
        if(diffDays >= 0) {
          color(diffDays);
          document.getElementById('inputOverlay').classList.add('byeBye');
          h.classList.remove('is-closed');
          h.style.transform = "scale(0.65) translateY(0px)";
          time.innerHTML = diffDays;
        }
        if(diffDays === 1) {
          unit.innerHTML = 'Day';
        } else {
            unit.innerHTML = 'Days';
        }
    });
  }
  handleChange(e){
    this.setState({daysSober: e.target.value});
  }
  handleBlur(e){
    document.getElementsByTagName('body')[0].scrollTop = 0;
  }
	render(){
		return (
			<div id="inputOverlay" className='overlay inputOverlay'>
        <div className="centering">
          <h3>Enter Your Sobriety Date</h3>
          <input type="date" onChange={this.handleChange} onBlur={this.handleBlur}/>
          <button onClick={this.handleClick}>GO!</button>
        </div>
      </div>
		)
	}
}

export default Overlay


function color(days){
  var c = "";
  var c1 = "";
  var t = "";
  var tc = "";
  var top = document.getElementById('top');
  var bottom = document.getElementById('bottom1');
  var path = document.getElementsByTagName('path')[0];
  var line = document.getElementsByTagName('path')[0];
  var l = document.getElementById('logo');
  var chip =  document.getElementById('chip');
  var chipT =  document.getElementById('chipT');
  var hd =  document.getElementById('holdDays');
  if(days < 30) {
    c = "#fff";
    c1 = "#B1B4B3";
    t = "White<br>Chip";
    tc = "#000";
  }
  if(days > 29 && days < 60) {
    c = "red";
    c1 = "red";
    t = "Red<br>Chip";
    tc = "#fff";
  }
  if(days > 59 && days < 90) {
    c = "gold";
    c1 = "gold";
    t = "Gold<br>Chip";
    tc = "#fff";
  }
  if(days > 89 && days < 180) {
    c = "green";
    c1 = "green";
    t = "Green<br>Chip";
    tc = "#fff";
  }
  if(days > 179 && days < 270) {
    c = "blue";
    c1 = "blue";
    t = "Blue<br>Chip";
    tc = "#fff";
  }
  if(days > 269 && days < 365) {
    c = "purple";
    c1 = "purple";
    t = "Purple<br>Chip";
    tc = "#fff";
  }
  if(days > 364) {
    c = "#E8B051";
    c1 = "#E8B051";
    t = "Bronze<br>Token";
    tc = "#fff";
  }
  top.style.backgroundColor = c1;
  bottom.style.backgroundColor = c1;
  path.style.stroke = c1;
  line.style.stroke = c1;
  l.style.color = c1;
  chip.style.backgroundColor = c;
  chipT.style.color = tc;
  chipT.innerHTML = t;
  hd.setAttribute('data-days', days);
}