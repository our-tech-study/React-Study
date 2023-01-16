import React, { useState, useMemo, useCallback } from "react"

const getAverage = numbers => {
  console.log("평균값 계산 중...")
  if (numbers.length === 0) return 0
  const sum = numbers.reduce((acc, number) => acc + number, 0)
  return sum / numbers.length
}

function UseMemoSample() {
  const [list, setList] = useState([2, 2])
  const [number, setNumber] = useState("")

  const onChange = e => {
    setNumber(e.target.value)
  }

  const onInsert = () => {
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber("")
  }

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  )
}

export default UseMemoSample
