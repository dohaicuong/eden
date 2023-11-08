import { useState } from 'react'
import { trpc } from './providers/query'

function App() {
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

export default App
