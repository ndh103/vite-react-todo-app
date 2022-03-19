import { MantineThemeColors } from '@mantine/core'

/* eslint-disable max-classes-per-file */
// Custome colors are inspired by DaisyUI theme color (Emerald theme)
// https://daisyui.com/docs/colors/
const customColors = {
  primary: ['#66CC8A'],
  'primary-focus': ['#3DB868'],
  'primary-content': ['#F9FAFB'],
  secondary: ['#377CFB'],
  'secondary-focus': ['#0557F0'],
  'secondary-content': ['#F9FAFB'],
  accent: ['#EA5234'],
  'accent-focus': ['#D03516'],
  'accent-content': ['#F9FAFB'],
  neutral: ['#333C4D'],
  'neutral-focus': ['#29303D'],
  'neutral-content': ['#F9FAFB'],
  'base-100': ['#FFFFFF'],
  'base-200': ['#E6E6E6'],
  'base-300': ['#CFCFCF'],
  'base-content': ['#333C4D'],
  info: ['#3ABFF8'],
  'info-content': ['#002B3D'],
  success: ['#36D399'],
  'success-content': ['#003320'],
  warning: ['#FBBD23'],
  'warning-content': ['#382800'],
  error: ['#F87272'],
  'error-content': ['#470000'],
}

// Add 9 more shades (same value) as Mantine requires each color to have 10 shades
function toMantineColors(colors: any) {
  const colorNames = Object.keys(colors)
  const mantineColors = { ...colors }

  colorNames.forEach((colorName) => {
    for (let i = 0; i < 9; i += 1) {
      const colorValue = mantineColors[`${colorName}`][0]
      mantineColors[`${colorName}`].push(colorValue)
    }
  })

  return mantineColors
}

const customMantineColors = toMantineColors(customColors)

export const mantineTheme = {
  colors: customMantineColors as MantineThemeColors,
  primaryColor: 'primary',
}
