//The logic for the actions

//getting the database or "pool" from DB.js
const pool = require("../../db");
const queries = require("./queries");

const getTodos = (req, res) => {
  //query our database
  pool.query(queries.getTodos, (error, results) => {
    //send an error if something is wrong
    if (error) throw error;

    //if the request is successful then we send the todos from the database
    res.status(200).json(results.rows);
  });
};

const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getTodoById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addTodo = (req, res) => {
  const { title } = req.body;

  // check if todo exists
  pool.query(queries.checkTodoExists, [title], (error, results) => {
    if (results.rows.length) {
      res.send("Todo already exists.");
    }
  });

  //add todo to db
  pool.query(queries.addTodo, [title], (error, results) => {
    if (error) throw error;
    res.status(201).send("Todo created successfully.");
  });
};

const deleteTodo = (req, res) => {
  //id comes in as a string by defualt so we need to parse it
  const id = parseInt(req.params.id);

  pool.query(queries.getTodoById, [id], (error, results) => {
    const noTodoFound = !results.rows.length;
    if (noTodoFound) {
      res.send("Todo does not exist in the database.");
    }

    pool.query(queries.deleteTodo, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Todo removed successfully.");
    });
  });
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  pool.query(queries.getTodoById, [id], (error, results) => {
    const noTodoFound = !results.rows.length;
    if (noTodoFound) {
      res.send("Todo does not exist in the database.");
    }

    pool.query(queries.updateTodo, [title, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
};

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,
};
