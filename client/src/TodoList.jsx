import { useState } from 'react'

export function TodoList({ todos, onAddTodo }) {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      onAddTodo(newTodo)
      setNewTodo('')
    }
  }

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit} className="add-form">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

