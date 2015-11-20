'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var NavHeader = require('./src/nav.jsx');
var HomePane = require('./src/components.jsx').HomePane;
var AboutPane = require('./src/components.jsx').AboutPane;
var ContactPane = require('./src/components.jsx').ContactPane;

var links = [{
  name: 'Home', to: '#home', component: <HomePane />
}, {
  name: 'About', to: '#about', component: <AboutPane />
}, {
  name: 'Find us', to: '#findus', component: <ContactPane />
}];

ReactDOM.render(
  <NavHeader links={links} DOMNode={document.getElementById('main-container')}/>,
  document.getElementById('header')
);

// Set up router rules.
routie({
  'home': function () {
    ReactDOM.render(
      <HomePane/>,
      document.getElementById('main-container')
    );
  },
  'about': function () {
    ReactDOM.render(
      <AboutPane/>,
      document.getElementById('main-container')
    );
  },
  'findus': function () {
    ReactDOM.render(
      <ContactPane/>,
      document.getElementById('main-container')
    );
  },
  '': function () {
    routie('home');
  }
});

new WOW().init();
