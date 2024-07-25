import React from 'react'
import {Sidebar} from './components/Sidebar'

function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="w-[90%] flex">
        <Sidebar />
      </div>
    </div>
  )
}

export default App