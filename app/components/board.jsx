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
    return (
      <div className='board'>
        {this.state.board.map(function(intersection, index) {
          return <Intersection stone="intersection.stone" intersectionIndex="index"></Intersection>
        })}
      </div>
    )
  },
});
