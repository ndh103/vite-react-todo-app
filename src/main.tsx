import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import App from './App'
import mantineTheme from './theme/mantine/mantineTheme'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={mantineTheme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
