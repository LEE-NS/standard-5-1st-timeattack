import TodoItem from "./TodoItem"

export default function TodoList({ sectionName, tasks, setTasks }) {
  const listStyle = {
    listStyle: "none",
  }

  const working = tasks.filter((task) => task.isDone === false)
  const done = tasks.filter((task) => task.isDone === true)

  return (
    <div>
      <h2>{sectionName}</h2>
      <ul style={listStyle}>
        {(sectionName === "working" ? working : done).map((task) => (
          <li key={task.id}>
            <TodoItem task={task} tasks={tasks} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </div>
  )
}
