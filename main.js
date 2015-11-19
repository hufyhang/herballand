'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var NavHeader = require('./src/nav.jsx');
var HomePane = require('./src/components.jsx').HomePane;
var AboutPane = require('./src/components.jsx').AboutPane;
var ContactPane = require('./src/components.jsx').ContactPane;

var links = [{
  name: 'Home', component: <HomePane />
}, {
  name: 'About', component: <AboutPane />
}, {
  name: 'Contact', component: <ContactPane />
}];

ReactDOM.render(
  <NavHeader links={links} DOMNode={document.getElementById('main-container')}/>,
  document.getElementById('header')
);

ReactDOM.render(
  <HomePane/>,
  document.getElementById('main-container')
);

