module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Make sure tailwind breakpoints are configured to be same as Mantine breakpoints
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    extend: {
      colors: {
        primary: '#66CC8A',
        'primary-focus': '#3DB868',
        'primary-content': '#F9FAFB',
        secondary: '#377CFB',
        'secondary-focus': '#0557F0',
        'secondary-content': '#F9FAFB',
        accent: '#EA5234',
        'accent-focus': '#D03516',
        'accent-content': '#F9FAFB',
        neutral: '#333C4D',
        'neutral-focus': '#29303D',
        'neutral-content': '#F9FAFB',
        'base-100': '#FFFFFF',
        'base-200': '#E6E6E6',
        'base-300': '#CFCFCF',
        'base-content': '#333C4D',
        info: '#3ABFF8',
        'info-content': '#002B3D',
        success: '#36D399',
        'success-content': '#003320',
        warning: '#FBBD23',
        'warning-content': '#382800',
        error: '#F87272',
        'error-content': '#470000',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // No reset, this is to avoid clashing with Mantine
    preflight: false,
  },
}
