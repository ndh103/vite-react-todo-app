import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// ChakraUI - Customize the breakpoints
const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
})

// ChakraUI -  Extend the theme
const theme = extendTheme({ breakpoints })

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
