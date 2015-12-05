var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('components/board');

window.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board/>, document.getElementById('app'));
});
