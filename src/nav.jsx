'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var NavHeader = React.createClass({
  getInitialState: function () {
      return {
        links: this.props.links
      };
  },

  navigate: function (evt) {
    var index = evt.target.getAttribute('data-index') || 0;
    var component = this.state.links[index].component;
    ReactDOM.render(
      component,
      this.props.DOMNode
    );
  },

  render: function () {
    var linkNodes = this.state.links.map(function (item) {
      // return <a onClick={this.navigate} data-index={index}>{item.name}</a>;
      return <a href={item.to}>{item.name}</a>;
    }.bind(this));

    return (
      <div>
        <div id="title">Herbal Land</div>
        <div id="subtitle">Chinese Medicine &diams; Acupuncture &diams; Reflexology</div>
        <nav>
         {linkNodes}
        </nav>
      </div>
    );
  }
});


module.exports = NavHeader;
