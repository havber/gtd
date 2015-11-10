import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="app-container">
        <TaskList tasks={tasks} />
        <button onClick={onAddTask}>Add task</button>
      </div>
    );
  }
});
