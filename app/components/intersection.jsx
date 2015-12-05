var React = require('react');
var Intersection = require('components/intersection');

module.exports = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className='intersection'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000" stroke="#000000">
          <path x1="10" y1="0" x2="10" y2="20" strokeWidth="2"/>
          <path x1="0" y1="10" x2="20" y2="10" strokeWidth="2"/>
        </svg>
      </div>
    )
  },
});
