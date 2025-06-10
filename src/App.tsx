import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import Table from './components/Table'

function App() {
  const [level, setLevel] = useState(0)
  
  return (<div className="app">
  <Header/>
  <Filter setLevel={setLevel}/>
  <Table level={level}/>
  </div>
  )
}

export default App
