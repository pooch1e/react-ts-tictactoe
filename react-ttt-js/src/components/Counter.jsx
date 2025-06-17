import { useState } from "react"

export const Counter = (winner) => {
  const [count, setCount] = useState(0);
  if (winner === 'X') {
    setCount(count + 1);
  }
  return (
    <h3>Your Score is: {count}</h3>
  )
}