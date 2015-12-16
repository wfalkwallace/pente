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

  takeIntersection: function(index, player) {
    this.state.board[index].owner = player;
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
          return <Intersection
                  owner={intersection.owner}
                  onClick={this.takeIntersection.bind(this, index, index % 2 + 1)}
                  key={index}></Intersection>
        }.bind(this))}
      </div>
    );
  },
});
