import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) return
    onAdd(trimmedName, description.trim())
    setName('')
    setDescription('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
      />
      <button type="submit">Add task</button>
    </form>
  )
}
