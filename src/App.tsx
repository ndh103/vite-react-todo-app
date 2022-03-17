import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import TodoHomePage from './pages/todo/TodoHomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoHomePage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
