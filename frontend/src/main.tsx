import React from 'react'
import ReactDOM from 'react-dom/client'

import { TRPCProvider } from './providers/query.tsx'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TRPCProvider>
      <App />
    </TRPCProvider>
  </React.StrictMode>,
)
