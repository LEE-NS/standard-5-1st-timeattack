export default function TodoItem({ task, tasks, setTasks }) {
  const { id, title, job, isDone } = task

  const deleteTask = (id) => {
    const newTasks = tasks.filter((eachTask) => eachTask.id !== id)
    setTasks(newTasks)
  }

  const UpdateTask = (id) => {
    const updatedTasks = tasks.map((eachTask) =>
      eachTask.id === id ? { ...eachTask, isDone: !eachTask.isDone } : eachTask
    )
    setTasks(updatedTasks)
  }

  const blockStyle = {
    border: "1px solid black",
  }

  return (
    <div style={blockStyle}>
      <div>
        <p>{title}</p>
        <p>{job}</p>
      </div>
      <button onClick={() => UpdateTask(id)}>{isDone ? "취소" : "완료"}</button>
      <button onClick={() => deleteTask(id)}>삭제</button>
    </div>
  )
}
