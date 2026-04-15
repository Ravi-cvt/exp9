import { useState, useEffect } from 'react'
import { TodoList } from './TodoList.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos')
      const data = await res.json()
      setTodos(data)
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  const addTodo = async (text) => {
    try {
      await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      fetchTodos()
    } catch (err) {
      console.error('Add error:', err)
    }
  }

  return (
    <div className="app">
      <h1>Todo App on Vercel</h1>
      <TodoList todos={todos} onAddTodo={addTodo} />
    </div>
  )
}

export default App

