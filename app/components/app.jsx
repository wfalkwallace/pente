var React = require('react');
var Board = require('components/board');

module.exports = React.createClass({
  getInitialState: function() {
    var board = [];
    for (var i = 0; i < 19*19; i++) {
      board.push({
        stone: null,
      });
    }
    return {
      board: board,
    };
  },
  render: function() {
    var boardStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <div className='app' style={appStyles}>
        <Board/>
      </div>
    );
  },
});
