import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import BookTable from './components/book-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <BookTable />
    </div>
  )
}

export default App
