import { useState } from 'react'
import '../App.css'

function Termometro({title, initial = 0}) {
  const [count, setCount] = useState(Number(initial))

  return (
    <>
     <h1>{title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
        count is {count}
        </button>
        </div>
    </>
  )
}

export default Termometro;