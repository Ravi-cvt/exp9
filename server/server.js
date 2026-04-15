const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

let todos = [
  { id: 1, text: 'Learn Docker CI/CD' },
  { id: 2, text: 'Push to Docker Hub' }
];

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text required' });
  const newTodo = { id: todos.length + 1, text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

