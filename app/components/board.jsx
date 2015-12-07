var React = require('react')
var Intersection = require('components/intersection')

module.exports = React.createClass({
  getInitialState: function() {
    var board = [];
    for (var i = 0; i < 19*19; i++) {
      board.push({
        stone: null,
      })
    }
    return {
      board: board,
    };
  },
  render: function() {
    var boardStyles = {
      display: 'flex',
      flexWrap: 'wrap',
    }

    return (
      <div className='board' style={boardStyles}>
        {this.state.board.map(function(intersection, index) {
          return <Intersection stone="intersection.stone" intersectionIndex="index"></Intersection>
        })}
      </div>
    )
  },
});
