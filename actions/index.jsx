var FirebaseApp = require('../config/firebase.js');

var Todo = FirebaseApp.database().ref();

export var addTodo = function (text) {
  return dispatch => Todo.push({
    text: text,
    completed: false
  });
};
export var fetchTodos = function (todos) {
  return dispatch => {
    Todo.on('value', snapshot => {
      dispatch({
        type: 'ADD_TODOS',
        todos: snapshot.val()
      });
    });
  }
};
export var toggleTodo = function (id) {
  var todoCompleted = false;
  Todo.child(id).once("value", function (snapshot) {
    todoCompleted = snapshot.val().completed;
  });
  return dispatch => Todo.child(id).update({ completed: !todoCompleted });
};

export var searchTodo = function (text) {
  return {
    type: 'SEARCH_TODO',
    searchTerm: text
  }
};

export var toggleTodoCompleted = function () {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}