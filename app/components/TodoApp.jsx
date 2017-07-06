var React = require('react');
var ReactDOM = require('react-dom');

var SearchTodo = require('./SearchTodo.jsx');
var TodoList = require('./TodoList.jsx');
var AddTodo = require('./AddTodo.jsx')

var actions = require('../../actions/index');
var connect = require('react-redux').connect;
var TodoHelper = require('../../helpers/TodoHelper.js');

var TodoApp = React.createClass({
	componentWillMount: function () {
		this.props.dispatch(actions.fetchTodos());
	},
	render: function () {
		return (
			<div className="container">
				<SearchTodo />
				<TodoList />
				<AddTodo />
			</div>
		);
	}
});

module.exports = connect()(TodoApp);