import React from 'react';

import './About.css'; 
import resume from './Juliet Sabol Resume - UX Developer.pdf'
import portrait from '../../img/portrait.jpg';
import { smoothScroll } from '../App/App';

const About = () => (
	<section className="bg-primary" id="about">
    <div className="container">
      <div className="row">
      	<div className="col-md-3 portrait">
      		<img src={portrait} alt="Juliet Sabol Portrait" />
      	</div>
        <div className="col-md-9 mx-auto">
        	<h2 className="text-faded">About Me</h2>
          <p className="text-faded mb-4">I'm a UX designer and web developer, who is passionate about usability and enjoys rapid prototyping. At my last employer, I spearheaded the creation of a UX practice. For the past two years I've been travelling the world and living in Thailand. I'll be moving back to the U.S. soon, and am looking for work.</p>
          <a onClick={ smoothScroll } className="btn btn-light btn-xl js-scroll-trigger hire-button" href="#contact">Contact me</a>
          <a href={resume} target="_blank" className="btn btn-xl btn-primary">
          	<i className="fas fa-file-pdf" /> Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;