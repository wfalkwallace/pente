var React = require('react')
var Intersection = require('components/intersection')

module.exports = React.createClass({
  getInitialState() {
    return {
      var board = [];
    };
  },
  render() {
    return <div className='board'>
      {this.state.board.map((intersection, index) =>
        <Intersection stone="intersection.stone" intersectionIndex="index"></Intersection>
      )}
    <div>;
  },
});


todoItems.map((todoItem, i) =>
                    <li key={'todoitem' + i}>
                        <TodoItem owner={owner} task={todoItem.task} />
                    </li>
                )}
