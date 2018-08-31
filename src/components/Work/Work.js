import React from 'react';

import img1full from '../../img/portfolio/fullsize/1.jpg';
import img1thum from '../../img/portfolio/thumbnails/1.jpg';
import img2full from '../../img/portfolio/fullsize/1.jpg';
import img2thum from '../../img/portfolio/thumbnails/2.jpg';
import img3full from '../../img/portfolio/fullsize/3.jpg';
import img3thum from '../../img/portfolio/thumbnails/3.jpg';
import img4full from '../../img/portfolio/fullsize/4.jpg';
import img4thum from '../../img/portfolio/thumbnails/4.jpg';
import img5full from '../../img/portfolio/fullsize/5.jpg';
import img5thum from '../../img/portfolio/thumbnails/5.jpg';
import img6full from '../../img/portfolio/fullsize/6.jpg';
import img6thum from '../../img/portfolio/thumbnails/6.jpg';

const PROJECTS = [
	{
		category: 'Category',
		name: 'Project Name',
		imgFull: img1full,
		imgThumb: img1thum
	},
	{
		category: 'Category',
		name: 'Project Name',
		imgFull: img2full,
		imgThumb: img2thum
	},
	{
		category: 'Category',
		name: 'Project Name',
		imgFull: img3full,
		imgThumb: img3thum
	},
	{
		category: 'Category',
		name: 'Project Name',
		imgFull: img4full,
		imgThumb: img4thum
	},
	{
		category: 'Category',
		name: 'Project Name',
		imgFull: img5full,
		imgThumb: img5thum
	},
	{
		category: 'Category',
		name: 'Project Name',
		imgFull: img6full,
		imgThumb: img6thum
	}
]

const Project = ({ category = "", name = "", imgFull = "", imgThumb = ""}) => (
	<div className="col-lg-4 col-sm-6">
    <a className="portfolio-box" href={imgFull}>
      <img className="img-fluid" src={imgThumb} alt="" />
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