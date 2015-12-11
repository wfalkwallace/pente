var React = require('react');
var Intersection = require('components/intersection');

module.exports = React.createClass({
  getInitialState: function() {
    var board = [];
    for (var i = 0; i < 19*19; i++) {
      board.push({
        owner: 0,
      });
    }
    return {
      board: board,
    };
  },
  render: function() {
    var boardStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      width: '570px',
      height: '570px',
      margin: '50px auto',
    };

    return (
      <div className='board' style={boardStyles}>
        {this.state.board.map(function(intersection, index) {
          return <Intersection owner={intersection.owner} intersectionIndex={index} key={index}></Intersection>
        })}
      </div>
    );
  },
});
