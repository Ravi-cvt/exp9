let todos = [
  { id: 1, text: 'Learn Vercel' },
  { id: 2, text: 'Deploy app' }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(todos)
  } else if (req.method === 'POST') {
    const { text } = req.body
    const newTodo = { id: todos.length + 1, text }
    todos.push(newTodo)
    res.status(201).json(newTodo)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

