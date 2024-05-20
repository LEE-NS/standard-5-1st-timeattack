import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <h1>to-do list</h1>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoList sectionName="working" tasks={tasks} setTasks={setTasks} />
      <TodoList sectionName="done" tasks={tasks} setTasks={setTasks} />
    </>
  )
}
