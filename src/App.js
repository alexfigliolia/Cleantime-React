import React, { Component } from 'react';
import Overlay from './components/Overlay.js';
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Burger from './components/Burger.js';
import Bottom from './components/Bottom.js';

class App extends Component {
  constructor(props){
  	super(props);
    this.state = {
      "cleantime" : 0,
      "days" : 0,
      "months" : 0,
      "years" : 0,
      "today" : new Date(),
      "unit" : "Days",
      "chipColor" : "grey",
      "textColor" : "#fff",
      "chipText1" : "",
      "chipText2" : "",
      "burgerColor" : "gray",
      "date" : 0,
      "soberDate" : 0,
      "centerClasses": "centering startup",
      "overlayClasses" : "overlay inputOverlay",
      "burgerClasses" : "hamburglar is-open",
      "burgerToggle" : true,
      "timeClasses" : "time-show",
      "unitClasses" : "unit-show"
    }
  	this.handleTouchMove.bind(this);
  }

  handleTouchMove(e){
  	e.preventDefault();
  }

  cleanTime(val) {
    var oneDay = 24*60*60*1000;
    var firstDate = this.state.today;
    var secondDate = new Date(val);
    var diffDays = (Math.round (Math.abs( (firstDate.getTime() - secondDate.getTime() ) / (oneDay) )))-1;
    this.setState({
      "cleantime" : diffDays,
      "days" : diffDays,
      "months" : Math.floor(diffDays/30),
      "years" : Math.floor(diffDays/365),
      "soberDate" : secondDate,
      "centerClasses": "centering",
      "overlayClasses": "overlay inputOverlay byeBye",
      "burgerClasses" : "hamburglar is-open h-show",
      "burgerToggle" : true
    });
    this.getUnit(diffDays);
    this.getColor(diffDays);
  }

  getUnit(diffDays) {
    if(diffDays > 1 || diffDays === 0) {
      this.setState({
        "unit" : "Days"
      });
    } else {
      this.setState({
        "unit" : "Day"
      });
    }
  }

  getColor(days) {
    if(days < 30) {
      this.setState({
        "chipColor" : "#fff",
        "textColor" : "#000",
        "chipText1" : "White",
        "chipText2" : "Chip",
        "burgerColor" : "#B1B4B3",
      });
    }
    if(days > 29 && days < 60) {
      this.setState({
        "chipColor" : "#D91F1F",
        "textColor" : "#fff",
        "chipText1" : "Red",
        "chipText2" : "Chip",
        "burgerColor" : "#D91F1F",
      });
    }
    if(days > 59 && days < 90) {
      this.setState({
        "chipColor" : "#ECC62B",
        "textColor" : "#fff",
        "chipText1" : "Gold",
        "chipText2" : "Chip",
        "burgerColor" : "#ECC62B",
      });
    }
    if(days > 89 && days < 180) {
      this.setState({
        "chipColor" : "#17B005",
        "textColor" : "#fff",
        "chipText1" : "Green",
        "chipText2" : "Chip",
        "burgerColor" : "#17B005",
      });
    }
    if(days > 179 && days < 270) {
      this.setState({
        "chipColor" : "#2B54FF",
        "textColor" : "#fff",
        "chipText1" : "Blue",
        "chipText2" : "Chip",
        "burgerColor" : "#2B54FF",
      });
    }
    if(days > 269 && days < 365) {
      this.setState({
        "chipColor" : "#B13CA1",
        "textColor" : "#fff",
        "chipText1" : "Purple",
        "chipText2" : "Chip",
        "burgerColor" : "#B13CA1",
      });
    }
    if(days > 364) {
      this.setState({
        "chipColor" : "#E8B051",
        "textColor" : "#fff",
        "chipText1" : "Bronze",
        "chipText2" : "Token",
        "burgerColor" : "#E8B051",
      });
    }
  }

  burger(){
    if(this.state.burgerToggle === true) {
      this.setState({
        "overlayClasses" : "overlay inputOverlay",
        "burgerClasses" : "hamburglar h-show is-closed",
        "burgerToggle" : false
      });
    } else {
      this.setState({
        "overlayClasses" : "overlay inputOverlay byeBye",
        "burgerClasses" : "hamburglar h-show is-open",
        "burgerToggle" : true
      });
    }
  }

  handleDays(){
    this.setState({
      "timeClasses" : "time-show time-hide",
      "unitClasses" : "unit-show unit-hide"
    });
    setTimeout(function() { 
      this.setState({
        "days" : this.state.cleantime,
        "unit" : "Days",
      }); 
      if(this.state.cleantime === 1) {
        this.setState({
          "unit" : "Day"
        })
      }
    }.bind(this), 200);
    setTimeout(function() { 
      this.setState({
        "timeClasses" : "time-show",
        "unitClasses" : "unit-show"
      });
    }.bind(this), 200);
  }

  handleMonths(){
    this.setState({
      "timeClasses" : "time-show time-hide",
      "unitClasses" : "unit-show unit-hide"
    });
    setTimeout(function() { 
      this.setState({
        "days" :  this.state.months,
        "unit" : "Months"
      }); 
      if(this.state.months === 1) {
        this.setState({
          "unit" : "Month"
        })
      }
    }.bind(this), 200);
    setTimeout(function() { 
      this.setState({
        "timeClasses" : "time-show",
        "unitClasses" : "unit-show"
      });
    }.bind(this), 200);
  }
  
  handleYears() {
    this.setState({
      "timeClasses" : "time-show time-hide",
      "unitClasses" : "unit-show unit-hide"
    });
    setTimeout(function() { 
      this.setState({
        "days" :  this.state.years,
        "unit" : "Years"
      }); 
      if(this.state.months === 1) {
        this.setState({
          "unit" : "Year"
        })
      }
    }.bind(this), 200);
    setTimeout(function() { 
      this.setState({
        "timeClasses" : "time-show",
        "unitClasses" : "unit-show"
      });
    }.bind(this), 200);
  }

  render() {
    return (
      <div onTouchMove={this.handleTouchMove}>

      	<Overlay
          classes={this.state.overlayClasses} 
          cleanTime={this.cleanTime.bind(this)}
          centerClasses={this.state.centerClasses} />

        <Header
          chipText1={this.state.chipText1} 
          chipText2={this.state.chipText2} 
          textColor={this.state.textColor} 
          chipColor={this.state.chipColor} 
          burgerColor={this.state.burgerColor} />

        <Burger 
          classes={this.state.burgerClasses} 
          burger={this.burger.bind(this)}
          burgerColor={this.state.burgerColor} />

        <Banner 
          cleantime={this.state.days}
          unit={this.state.unit}
          timeClasses={this.state.timeClasses}
          unitClasses={this.state.unitClasses} />

        <Bottom 
          handleDays={this.handleDays.bind(this)}
          handleMonths={this.handleMonths.bind(this)}
          handleYears={this.handleYears.bind(this)} />

      </div>
    );
  }
}

export default App;
