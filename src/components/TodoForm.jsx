import { useState } from "react"

export default function TodoForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("")
  const [job, setJob] = useState("")

  const onChangeHandler = (setText) => {
    setText(event.target.value)
  }

  const addTask = (e) => {
    e.preventDefault()
    if (!title.trim() || !job.trim()) {
      return alert("제목 또는 내용이 비어있습니다.")
    }
    const task = {
      id: crypto.randomUUID(),
      title,
      job,
      isDone: false,
    }
    setTasks([...tasks, task])
    setTitle("")
    setJob("")
  }

  return (
    <form onSubmit={addTask}>
      <div>
        <p>제목</p>
        <input
          type="text"
          value={title}
          onChange={() => onChangeHandler(setTitle)}
        />
      </div>
      <div>
        <p>내용</p>
        <input
          type="text"
          value={job}
          onChange={() => onChangeHandler(setJob)}
        />
      </div>
      <button>추가</button>
    </form>
  )
}
