import { useRef, useState } from "react"
import "./App.css"

function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
  ])
  const idRef = useRef(4)

  const [inputText, setInputText] = useState("")

  const onChange = e => setInputText(e.target.value)
  const onAdd = () => {
    const newNames = names.concat({ id: idRef.current++, text: inputText })
    setNames(newNames)
    setInputText("")
  }
  const onRemove = id => {
    const newNames = names.filter(name => name.id !== id)
    setNames(newNames)
  }

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onAdd}>추가</button>
      <ul>
        {names.map(name => (
          <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default IterationSample
