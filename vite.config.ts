// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // for emotion config with vite, https://dev.to/glocore/configure-emotion-with-your-vite-react-project-7jl
      babel: {
        plugins: ['@emotion/babel-plugin'], // for emotion config with vite, https://dev.to/glocore/configure-emotion-with-your-vite-react-project-7jl
      },
    }),
  ],
})
