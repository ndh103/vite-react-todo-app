import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/about/About'
import TodoHomePage from './pages/todo/TodoHomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TodoHomePage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
