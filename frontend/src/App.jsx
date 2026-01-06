import { useState } from 'react'
import './App.css'
import CalendarList from './components/CalendarList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalendarList />
    </>
  )
}

export default App
