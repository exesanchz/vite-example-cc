import { useState } from 'react'
import './App.css'
import Root from './root/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
       <Root/>
      </div>
  )
}

export default App
