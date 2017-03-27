import React, { Component } from 'react';
import Overlay from './components/Overlay.js';
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Burger from './components/Burger.js';
import Bottom from './components/Bottom.js';

class App extends Component {
  constructor(){
  	super();
  	this.handleTouchMove.bind(this);
  }
  handleTouchMove(e){
  	e.preventDefault();
  }
  render() {
    return (
      <div onTouchMove={this.handleTouchMove}>
      	<Overlay/>
        <Header/>
        <Burger/>
        <Banner/>
        <Bottom />
      </div>
    );
  }
}

export default App;
