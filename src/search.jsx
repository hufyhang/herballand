'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({
  getInitialState: function () {
    return {
      postcode: false,
      result: '',
      warning: ''
    };
  },
  componentDidMount: function () {
    ReactDOM.findDOMNode(this.refs.textInput).focus();
  },
  handleChange: function (evt) {
    this.setState({warning: ''});
    var value = evt.target.value || '';
    value = value.replace(/\ /g, '').toUpperCase();
    if (value.length < 5) {
      this.setState({postcode: false});
    }
    else {
      this.setState({postcode: value});
    }
  },
  handleKeyUp: function (evt) {
    // When hit Enter, start to search.
    if (evt.keyCode === 13) {
      this.search();
    }
  },
  search: function () {
    console.log(this.state.postcode);
    if (!this.state.postcode) {
      this.setState({warning: 'Invalid postcode.'});
    }
  },
  render: function () {
    return (
      <div className="withBack">
        <input ref="textInput" type="text" placeholder="Enter postcode to check our health service coverage..." style={{padding: '5px 10px', border: '2px solid #f39c12', borderRadius: '6px 0 0 6px', width: '500px', fontSize: '20px'}} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
        <div style={{cursor: 'pointer', position: 'relative', top: '-2px', lineHeight: '18px', display: 'inline-block', padding: '10px 20px', background: '#f39c12', borderRadius: '0 6px 6px 0', color: '#fff'}} onClick={this.search}>Check</div>
        <div style={{color: 'red'}}>{this.state.warning}</div>

        {this.state.result}
      </div>
    );
  }
});

var SearchResult = React.createClass({
  render: function () {
    return (
      <div>
        <table>
          <tr>
            <td>Postcode:</td> <td>{this.props.postcode}</td>
          </tr>
          <tr>
            <td>On-site Consultation &amp; Treatment:</td>
            <td>{this.props.onsite === true ? <span>&#x2713;</span> : <span>&#x2717;</span>}</td>
          </tr>
          <tr>
            <td>Home Visit:</td>
            <td>{this.props.home === true ? <span>&#x2713;</span> : <span>&#x2717;</span>}</td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Search;