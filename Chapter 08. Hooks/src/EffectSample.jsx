import React, { useEffect, useState } from "react"

function EffectSample() {
  const [show, setShow] = useState(true)
  const [countList, setCountList] = useState([1, 2, 3])
  const onToggle = () => {
    setShow(!show)
  }

  const onAdd = () => {
    setCountList(countList.concat(Math.random() * 100))
  }
  return (
    <div>
      <button onClick={onToggle}>토글</button>
      <button onClick={onAdd}>추가</button>
      {show && <List countList={countList} />}
    </div>
  )
}

function List({ countList }) {
  useEffect(() => {
    console.log("mount || update")
  })

  useEffect(() => {
    console.log("mount")
    return () => {
      console.log("unmount")
    }
  }, [])
  return (
    <>
      {countList.map(count => (
        <div>{count}</div>
      ))}
    </>
  )
}

export default EffectSample
