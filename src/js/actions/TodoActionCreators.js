import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    task.completed = true;
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_COMPLETED
    });
  },

  uncompleteTask(task) {
    task.completed = false;
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_UNCOMPLETED
    });
  }
};
