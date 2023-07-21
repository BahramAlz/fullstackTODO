//Quering the database

const getTodos = "SELECT * FROM todos";

//Dollar sign as parameter/variable name, placeholder
const getTodoById = "SELECT * FROM todos WHERE id = $1";

//Checking if the todo exists
const checkTodoExists = "SELECT t FROM todos t WHERE t.title = $1";

// Add the todo
const addTodo = "INSERT INTO todos (title) VALUES ($1)";

// Delete a todo
const deleteTodo = "DELETE FROM todos WHERE id = $1";

// edit a todo
const updateTodo = "UPDATE todos SET title = $1 WHERE id = $2";

module.exports = {
  getTodos,
  getTodoById,
  checkTodoExists,
  addTodo,
  deleteTodo,
  updateTodo,
};
