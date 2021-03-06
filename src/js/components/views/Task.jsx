import React from 'react';
import ActionCreator from '../../actions/TodoActionCreators';

export default React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle(task) {
    if (this.refs.checkbox.getDOMNode().checked) {
      ActionCreator.completeTask(task);
    } else {
      ActionCreator.uncompleteTask(task);
    }
  },

  render() {
    let {task} = this.props;
    return (
      <li className="task">
        <input type="checkbox" ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this, task)} />
        <label>{task.title}</label>
      </li>
    );
  }
});
