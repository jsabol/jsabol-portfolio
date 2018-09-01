import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import Nav from '../Nav/Nav';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const tripLineStyle = {
	"position": "relative",
	"margin": 0,
	"padding": 0,
	"height": '350px',
	width: '100%',
	"clear": "both"
}


const smoothScroll = (e) => {
  e.preventDefault()
  const id = e.currentTarget.getAttribute('href').slice(1)
  
  if(!document.getElementById(id)) return;

  $('html, body').animate({
    scrollTop: (document.getElementById(id).offsetTop - 56)
  }, 1000, "easeInOutExpo");

  // collapse the menu
  $('.navbar-collapse').collapse('hide');
}

class App extends Component {

  render() {
    return (
      <div id="page-top" className="App">
      	<Nav />
      	<Jumbotron />
      	<Work />
      	<About />
      	<Contact />
      </div>
    );
  }
}

export default App;
export { smoothScroll };