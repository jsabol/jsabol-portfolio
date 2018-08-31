import React, { Component } from 'react';
import $ from 'jquery';

import { smoothScroll } from '../App/App';

const Display = ({setRef}) => (
	<nav ref={setRef} className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a onClick={smoothScroll} className="navbar-brand" href="#page-top">Start Bootstrap</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a onClick={smoothScroll} className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a onClick={smoothScroll} className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a onClick={smoothScroll} className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a onClick={smoothScroll} className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default class Nav extends Component {

	constructor(){
		super();
		this.ref = React.createRef();
		this.navbarCollapse = this.navbarCollapse.bind(this);
	}

	navbarCollapse = () => {
		const ref = this.ref.current;

    if (document.documentElement.scrollTop > 100) {
      ref.classList.add("navbar-shrink");
    } else {
      ref.classList.remove("navbar-shrink");
    }
  };

	componentDidMount(){
		$(window).scroll(this.navbarCollapse);
	}

	render(){
		return <Display setRef={this.ref} />
	}
};