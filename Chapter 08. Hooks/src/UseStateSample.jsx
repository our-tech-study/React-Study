import React, { useState } from "react"

// state setter는 동기적이지 않다.
function UseStateSample() {
  const [count, setCount] = useState(1)

  const onIncrease = () => {
    setCount(count + 1)
    // console.log(count)
  }

  return (
    <div>
      <button onClick={onIncrease}>증가</button>
      <b>{count}</b>
    </div>
  )
}

// state setter 사용방법 두 가지
// const onIncrease = () => {
//   setCount(count+1);
//   setCount(prevCount => prevCount+1)
// }

// 값을 연속 업데이트하기 잘못된 예
// const onIncrease = () => {
//   setCount(count+1);
//   setCount(count+1);
// }
/*
count = 2
count = 2
*/
// 값을 연속 업데이트하기
// const onIncrease = () => {
//   setCount(prevCount => prevCount+1)
//   setCount(prevCount => prevCount+1)
// }
/*
count = callback(count)
count = callback(count)
*/

export default UseStateSample
