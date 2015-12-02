import ReactDOM from 'react-dom';
import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';
import Modal from 'react-modal';

export default React.createClass({

  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {isModalOpen: false};
  },

  onOpenModal: function() {
    this.setState({isModalOpen: true});
  },

  onCloseModal: function() {
    this.setState({isModalOpen: false});
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
        <button onClick={this.onOpenModal}><span>Add task</span>

          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.onCloseModal} >

            <button onClick={this.onCloseModal}>X</button>
            <p>Add task:</p>
            <input type="text"/>

          </Modal>

        </button>
      </div>
    );
  }
});
