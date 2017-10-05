const express = require('express');

const todoController = require('../controllers/todos');
const router = express.Router();

router.post('/todo', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.delete('/todo/:todoid', todoController.deleteTodo);

module.exports = router;
