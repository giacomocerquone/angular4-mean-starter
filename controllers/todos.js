const passport = require('passport');
const jwt = require('express-jwt');
const { validationResult } = require('express-validator/check');

const Todo = require('../models/Todo');

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

exports.createTodo = function (req, res) {
  let todo = new Todo({
    'title': req.body.title,
    'text': req.body.text
  });

  todo.save((err) => {
    if (err)
      sendError(err, res);
    response.data = 'Todo created';
    res.json(response);
  });
};

exports.getTodos = function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err)
      sendError(err, res);
    response.data = todos;
    res.json(response);
  });
};

exports.deleteTodo = function (req, res) {
  let todoId = req.params.todoid;

  Todo.findByIdAndRemove(todoId, function (err, todo) {
    if(err)
      sendError(err, res);
    response.data = 'Todo deleted'
    res.json(response);
  });
};
