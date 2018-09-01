import React from 'react';

import './Work.css';

import { PROJECTS } from './Project';

const Project = ({ category = "", name = "", imgFull = "", imgThumb = "", url = ""}) => (
	<div className="col-lg-4 col-sm-6">
    <a className="portfolio-box" href={`project/${url}`}>
      <img className="img-fluid" src={`img/${url}/${imgThumb}`} alt={name} />
      <div className="portfolio-box-caption">
        <div className="portfolio-box-caption-content">
          <div className="project-category text-faded">
            {category}
          </div>
          <div className="project-name">
            {name}
          </div>
        </div>
      </div>
    </a>
  </div>
);

const Work = () => (
	<section className="p-0" id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters popup-gallery">
        	{PROJECTS.map((p,i)=><Project key={i} {...p} />)}
        </div>
      </div>
    </section>
)

export default Work;