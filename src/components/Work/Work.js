import React from 'react';

import './Work.css';
import img1full from '../../img/portfolio/fullsize/nested-dnd.png';
import img1thum from '../../img/portfolio/thumbnails/nested-dnd.png';
import img2full from '../../img/portfolio/fullsize/faneverything.png';
import img2thum from '../../img/portfolio/thumbnails/faneverything.png';
import img3full from '../../img/portfolio/fullsize/fit.jpeg';
import img3thum from '../../img/portfolio/thumbnails/fit.jpeg';
import img4full from '../../img/portfolio/fullsize/ofr.png';
import img4thum from '../../img/portfolio/thumbnails/ofr.png';
import img5full from '../../img/portfolio/fullsize/sfsweb.png';
import img5thum from '../../img/portfolio/thumbnails/sfsweb.png';
import img6full from '../../img/portfolio/fullsize/uxcrgt.png';
import img6thum from '../../img/portfolio/thumbnails/uxcrgt.png';

const PROJECTS = [
	{
		category: 'Case Study',
		name: 'OFR',
		imgFull: img4full,
		imgThumb: img4thum
	},
	{
		category: 'Personal Project',
		name: 'Nested D&D',
		imgFull: img1full,
		imgThumb: img1thum
	},
	{
		category: 'Leadership',
		name: 'UX Practice',
		imgFull: img6full,
		imgThumb: img6thum
	},
	{
		category: 'UX',
		name: 'Facilities Inspection Tool',
		imgFull: img3full,
		imgThumb: img3thum
	},
	{
		category: 'UX Design',
		name: 'SFSWeb',
		imgFull: img5full,
		imgThumb: img5thum
	},
	{
		category: 'Case Study',
		name: 'FanEverything',
		imgFull: img2full,
		imgThumb: img2thum
	}
]

const Project = ({ category = "", name = "", imgFull = "", imgThumb = ""}) => (
	<div className="col-lg-4 col-sm-6">
    <a className="portfolio-box" href={imgFull}>
      <img className="img-fluid" src={imgThumb} alt={name} />
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