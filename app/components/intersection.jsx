var React = require('react');
var Stone = require('components/stone');

module.exports = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    var intersectionStyles = {
      width: '30px',
      height: '30px',
      position: 'relative',
    };

    return (
      <div className='intersection'
           style={intersectionStyles}
           onClick={this.props.onClick}>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 30 30"
             stroke="#000000">
          <path d="m 0 15 h 30"/>
          <path d="m 15 0 v 30"/>
        </svg>
        { this.props.owner ? <Stone owner={this.props.owner}/> : null }
      </div>
    )
  },
});
