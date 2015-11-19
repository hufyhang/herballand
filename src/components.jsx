'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var ABOUT = 'Established in 2001, Herbal Land Chinese Medicine is one of the most well-known traditional Chinese medicine practice in east London. Over the past decade, more than 500 patients came for consultation and treatment every month. Our principle consultant holds MSc, MRCHM, MAoR and MBRCP, and specialises in Chinese medicine, acupuncture, and reflexology.';

var ABOUT_INFO = <div>
<p><b>Address:</b></p>
<p>48 Woodgrange Road,Forest Gate <br/>
London, E7 0QH</p>
<p><b>Telephone:</b></p>
<p><a href="tel:02085342565">020 8534 2565</a></p>
<p><b>Opening Hours:</b></p>
<table className="content-table">
<tr>
  <td>Mon:</td>
  <td>10:30 - 18:00</td>
</tr>
<tr>
  <td>Tue:</td>
  <td>10:30 - 18:00</td>
</tr>
<tr>
  <td>Wed:</td>
  <td>10:30 - 18:00</td>
</tr>
<tr>
  <td>Thu:</td>
  <td>10:30 - 18:00</td>
</tr>
<tr>
  <td>Fri:</td>
  <td>10:30 - 18:00</td>
</tr>
<tr>
  <td>Sat:</td>
  <td>10:30 - 18:00</td>
</tr>
</table>
</div>;

var MAP = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.1691300256768!2d0.024838093759409038!3d51.54855302369516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7a2f261eb4b%3A0x8bf2a97a2d2d7406!2sLondon+E7+0QH%2C+UK!5e0!3m2!1sen!2s!4v1447912133623" frameborder="0" style={{minHeight: '200px', width: '100%', border: 0}} allowfullscreen></iframe>;

var ContentWrapper = React.createClass({
  render: function () {
    return (
      <div className="content-wrapper content">
        <div className="content-wrapper-left">{this.props.leftContent}</div>
        <div className="content-wrapper-right">{this.props.rightContent}</div>
        <div className="content-wrapper-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var HomePane = React.createClass({
  render: function () {
    return (
      <ContentWrapper>
        <img id="logo" src="img/pic.jpg" height="200" width="200"></img>
      </ContentWrapper>
      );
  }
});

var aboutNode = <p id="about" className="content">{ABOUT}</p>;
var AboutPane = React.createClass({
  render: function () {
    return (
      <ContentWrapper leftContent={aboutNode}/>
    );
  }
});

var ContactPane = React.createClass({
  render: function () {
    return (
      <ContentWrapper leftContent={MAP} rightContent={ABOUT_INFO}/>
    );
  }
});

module.exports = {HomePane: HomePane, AboutPane: AboutPane, ContactPane: ContactPane};
