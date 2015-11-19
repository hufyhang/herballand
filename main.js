'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var HomePane = require('./src/components.jsx').HomePane;
var AboutPane = require('./src/components.jsx').AboutPane;
var ContactPane = require('./src/components.jsx').ContactPane;

ReactDOM.render(
  <HomePane/>,
  document.getElementById('main-container')
);

