var todos = function (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case 'ADD_TODOS':
      let todos = [];
      for (let todo in action.todos) {
        todos.push({
          id: todo,
          text: action.todos[todo].text,
          completed: action.todos[todo].completed
        });
      }
      return todos;
    case 'TOGGLE_TODO':
      return state;
    default:
      return state;
  };
};
module.exports = todos;