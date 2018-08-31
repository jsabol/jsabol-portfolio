import React, { Component } from 'react';

const SERVICES = [
  {
    title: 'Sturdy Templates',
    icon: 'diamond',
    desc: 'Our templates are updated regularly so they don\'t break.'
  },
  {
    title: 'Ready to Ship',
    icon: 'paper-plane',
    desc: 'You can use this theme as is, or you can make changes!'
  },
  {
    title: 'Up to Date',
    icon: 'newspaper-o',
    desc: 'We update dependencies to keep things fresh.'
  },
  {
    title: 'Made with Love',
    icon: 'heart',
    desc: 'You have to make your websites with love these days!'
  }
]

const Service = ({icon = "", title = "", desc = ""}) => (
  <div className="col-lg-3 col-md-6 text-center">
    <a className="service-box mt-5 mx-auto">
      <i className={`fa fa-4x fa-${icon} text-primary mb-3 sr-icons`}></i>
      <h3 className="mb-3">{title}</h3>
      <p className="text-muted mb-0">{desc}</p>
    </a>
  </div>
)

const Display = () => (
  <section id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">At Your Service</h2>
          <hr className="my-4" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {SERVICES.map((s,i)=><Service key={i} {...s} />)}
      </div>
    </div>
  </section>
);

export default class Services extends Component {

  render = () => <Display />
}