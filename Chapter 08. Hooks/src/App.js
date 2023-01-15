import { useRef, useState } from "react"
import "./App.css"

function InputSample() {
  const [text, setText] = useState("")
  const inputRef = useRef()
  const onTextChange = e => {
    setText(e.target.value)
  }

  const onFoucsInput = () => {
    inputRef.current.focus()
  }
  return (
    <>
      <input value={text} onChange={onTextChange} ref={inputRef} />
      <button onClick={onFoucsInput}>포커스!</button>
    </>
  )
}

export default InputSample
