import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import App from './App'
import mantineTheme from './theme/mantine/mantineTheme'
import mirageFakeServer from './http-apis/fakeTodoApi'

// Just to get the fakeServer executed
if (mirageFakeServer) {
  console.log('Mirage Fake Server is ready', mirageFakeServer)
}

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
