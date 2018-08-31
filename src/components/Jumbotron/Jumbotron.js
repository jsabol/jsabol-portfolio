import React, { Component } from 'react';

import { smoothScroll } from '../App/App';

const Display = () => (
	<header className="masthead text-center text-white d-flex">
    <div className="container my-auto">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-uppercase">
            <strong>Your Favorite Source of Free Bootstrap Themes</strong>
          </h1>
          <hr />
        </div>
        <div className="col-lg-8 mx-auto">
          <p className="text-faded mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
          <a onClick={ smoothScroll } className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
        </div>
      </div>
    </div>
  </header>
)

export default class Jumbotron extends Component {

	render(){
		return <Display />
	}
}