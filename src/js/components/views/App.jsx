import ReactDOM from 'react-dom';
import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';
import Modal from 'react-modal';
import modalStyles from '../../../styles/modalStyles';

export default React.createClass({

  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {isModalOpen: true};
  },

  componentDidMount() {
    let body = document.querySelector('body');
    let self = this;
    body.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.keyCode === 78) {
        self.onOpenModal();
      }
    })
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

  onInput: function(event) {
    if (event.keyCode !== 13) {
      return;
    }
    this.props.onAddTask(event);
    this.onCloseModal();
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="app-container">
        <TaskList tasks={tasks} />

          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.onCloseModal}
            style={modalStyles}>
            <input id="new-task-input" onKeyDown={this.onInput} type="text"/>
          </Modal>


      </div>
    );
  }
});
