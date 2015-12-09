var React = require('react');
var Intersection = require('components/intersection');

module.exports = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    var intersectionStyles = {
      width: '20px',
      height: '20px',
    };

    return (
      <div className='intersection'>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="#000000"
             stroke="#000000"
             style={intersectionStyles}>
          <path d="m 0 10 h 20"/>
          <path d="m 10 0 v 20"/>
        </svg>
      </div>
    );
  },
});
