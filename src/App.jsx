import { useState } from "react"

export default function App() {
  const [num, setNum] = useState(0)
  const [result, setResult] = useState(0)

  const onChangeHandler = (e) => {
    setNum(e.target.value)
  }

  const plusHandler = (num) => {
    setResult(result + Number(num))
    setNum(0)
  }

  const minusHandler = (num) => {
    setResult(result - Number(num))
    setNum(0)
  }

  const resetNum = () => {
    setNum(0)
    setResult(0)
  }

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={num} onChange={onChangeHandler} /> 만큼을{" "}
        <button onClick={() => plusHandler(num)}>더할게요</button>{" "}
        <button onClick={() => minusHandler(num)}>뺄게요</button>
        <button onClick={resetNum}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  )
}
