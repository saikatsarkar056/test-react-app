import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'

const initialTasks = [
  { id: 1, name: 'Buy groceries', description: 'Milk, eggs, bread, and coffee' },
  { id: 2, name: 'Write report', description: 'Q2 performance summary for the team' },
]

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)

  const addTask = (name, description) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), name, description },
    ])
  }

  return (
    <div className="app">
      <h1>Task List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}
