'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var SUPPORTED_AREA = ['E6', 'E7'];

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
    var regex = /^[A-Za-z0-9\ ]+$/;
    var value = evt.target.value || '';
    value = value.replace(/\ /g, '').toUpperCase();
    if (value.length < 5 || regex.test(value) === false) {
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
    if (!this.state.postcode) {
      this.setState({warning: 'Invalid postcode.', result: ''});
      return;
    }

    // Now, check postcode. Home visit is only available for E7 & E6.
    var onsite = true;
    var home = false;
    var area = this.state.postcode.slice(0, 2);
    if (!!~SUPPORTED_AREA.indexOf(area)) { // If in the supported area...
      home = true;
    }
    var node =
    <SearchResult postcode={this.refs.textInput.value.toUpperCase() || this.state.postcode}
     onsite={onsite} home={home}/>;
    this.setState({result: node});
  },
  render: function () {
    return (
      <div className="withBack" style={{paddingTop: '20px'}}>
        <input ref="textInput" type="text" placeholder="Enter postcode to check our health service coverage..." style={{padding: '5px 10px', border: '2px solid #f39c12', borderRadius: '6px 0 0 6px', width: '500px', fontSize: '20px'}} onKeyUp={this.handleKeyUp} onChange={this.handleChange} />
        <div style={{cursor: 'pointer', position: 'relative', top: '-2px', lineHeight: '18px', display: 'inline-block', padding: '10px 20px', background: '#f39c12', borderRadius: '0 6px 6px 0', color: '#fff'}} onClick={this.search}>Check</div>
        <div style={{color: 'red', paddingTop: '5px', fontWeight: 'normal'}}>{this.state.warning}</div>

        {this.state.result}
      </div>
    );
  }
});

var SearchResult = React.createClass({
  render: function () {
    var alignLeft = {textAlign: 'left'};
    var tableStyle = {
      width: '350px',
      margin: 'auto',
      fontSize: '18px',
      fontWeight: 'normal'
    };
    var good = <span style={{color: 'rgb(4, 180, 0)'}}>&#x2713;</span>;
    var bad = <span style={{color: 'rgb(255, 3, 0)'}}>&#x2717;</span>;
    return (
      <div>
        <table style={tableStyle}>
          <tr>
            <td style={alignLeft}>Postcode:</td> <td>{this.props.postcode}</td>
          </tr>
          <tr>
            <td style={alignLeft}>On-site Consultation &amp; Treatment:</td>
            <td>{this.props.onsite === true ? good : bad}</td>
          </tr>
          <tr>
            <td style={alignLeft}>Home Visit Health Service:</td>
            <td>{this.props.home === true ? good : bad}</td>
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Search;