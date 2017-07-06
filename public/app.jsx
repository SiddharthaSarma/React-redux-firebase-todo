var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');

var todos = require('../reducers/index');
var showCompleted = require('../reducers/showCompleted');
var searchTerm = require('../reducers/searchTodo');
var actions = require('../actions/index');
var Provider = require('react-redux').Provider;
var TodoHelper = require('../helpers/TodoHelper.js');

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

var combinedReducer = redux.combineReducers({
  todos: todos,
  showCompleted: showCompleted,
  searchTerm: searchTerm
});

import TodoApp from '../app/components/TodoApp.jsx';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

var store = createStoreWithMiddleware(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('app'));
