import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ScrollReveal from 'scrollreveal';

// global vendor js
import 'bootstrap';
import 'magnific-popup';
import 'jquery.easing';

import 'font-awesome/css/font-awesome.min.css'
import 'magnific-popup/dist/magnific-popup.css';
import './index.css';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const sr = ScrollReveal();
sr.reveal('.sr-icons', {
  duration: 600,
  scale: 0.3,
  distance: '0px',
  interval: 200
});
sr.reveal('.sr-button', {
  duration: 1000,
  delay: 200
});
sr.reveal('.sr-contact', {
  duration: 600,
  scale: 0.3,
  distance: '0px',
  interval: 300
});

