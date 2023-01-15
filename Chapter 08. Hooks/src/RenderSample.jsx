import React, { useState, useRef, useCallback, useEffect } from "react"

const RenderSample = () => {
  console.log("render RenderSample")
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
  ])
  const idRef = useRef(4)
  const [inputText, setInputText] = useState("")

  const onChange = useCallback(e => setInputText(e.target.value), [setInputText])
  const onAdd = () => {
    setNames(names => names.concat({ id: idRef.current++, text: inputText }))
    setInputText("")
  }
  const onRemove = id => {
    setNames(names => names.filter(name => name.id !== id))
  }

  return (
    <div style={{ width: "500px", border: "1px solid black" }}>
      <InputSample onAdd={onAdd} value={inputText} onChange={onChange} />
      <NameList names={names} onRemove={onRemove} />
    </div>
  )
}

const InputSample = ({ value, onChange, onAdd }) => {
  console.log("render InputSample")
  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={onAdd}>추가</button>
    </>
  )
}

const NameList = ({ names, onRemove }) => {
  console.log("render NameList")
  return (
    <ul>
      {names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
          {name.text}
        </li>
      ))}
    </ul>
  )
}

export default RenderSample
