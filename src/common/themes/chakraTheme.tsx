// eslint-disable-next-line import/no-extraneous-dependencies
import { extendTheme } from '@chakra-ui/react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBreakpoints } from '@chakra-ui/theme-tools'
import layerStyles from './layerStyles'

// ChakraUI - Customize the breakpoints
const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
})

// ChakraUI -  Extend the theme
const theme = extendTheme({
  breakpoints,
  layerStyles,
})

export default theme
