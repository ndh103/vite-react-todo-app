import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { css } from '@emotion/react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const buttonStyle = css`
    color: hotpink;
  `

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            css={buttonStyle}
            type="button"
            onClick={() => setCount(count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <Button colorScheme="blue">Button</Button>
      </header>
    </div>
  )
}

export default App
