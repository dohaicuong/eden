import { useState } from 'react'
import { trpc } from './providers/query'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Greeting />
    </>
  )
}

export default App

const Greeting = () => {
  const [name, setName] = useState<string | undefined>(undefined)
  const { data } = trpc.greeting.useQuery({ name })

  return (
    <div>
      <input
        onChange={event => setName(event.target.value)}
      />
      <p>{data}</p>
    </div>
  )
}
