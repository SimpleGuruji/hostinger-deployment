import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => setData("Error:" + err))
  }, [])

  return (
    <>
      <h1>Welcome to Hustle with Amit from Frontend</h1>
      <h2 style={{ color: 'blue' }}>API data from backend : {data}</h2>
    </>
  )
}

export default App
