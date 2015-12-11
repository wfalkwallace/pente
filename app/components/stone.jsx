var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    var stoneStyles = {
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: '0',
    };

    return (
      <div className='stone'
           style={stoneStyles}>
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 30 30"
             stroke="#000000"
             fill={this.props.owner === 1 ? '#FFFFFF' : '#000000'}>
          <circle cx="15" cy="15" r="12"/>
        </svg>
      </div>
    )
  },
});
