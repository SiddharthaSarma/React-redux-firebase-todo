module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    filteredTodos = todos.filter(function (todo) {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter(function (todo) {
      var text = todo.text.toLowerCase();
      return !searchText || searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
    });

    filteredTodos.sort(function (a, b) {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}