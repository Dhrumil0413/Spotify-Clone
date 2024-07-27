import React from 'react'
import {Player} from './components/Player'
import {Sidebar} from './components/Sidebar'

function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
      <Player/>
    </div>
  )
}

export default App