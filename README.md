# A Todo application written using Vite + React + Typescript + Eslint + Prettier + Pre-commit + ChakraUI

A starter for React with Typescript with the fast Vite and all static code testing with Eslint and formatting with Prettier.

![Vite + React + Typescript + Eslint + Prettier](/resources/screenshot.png)

## Installation

Clone the repo and run `npm install`

## Start

After the successfull installation of the packages: `npm run dev`

## Features

- [x] Vite,
- [x] Eslint, Prettier
  - Using the [tutorial](https://javascript.plainenglish.io/setting-eslint-and-prettier-on-a-react-typescript-project-2021-22993565edf9)
- [x] Pre-commit check using "pre-commit"
- [x] Routing using [react router](https://reactrouter.com/)
- [x] CSS solution inside the project
  - [x] TailwindCSS as CSS Library
  - [x] [Mantine](https://mantine.dev/) as React Component Library
  - [x] Override TailwindCSS and Mantine breakpoints to match
  - [x] Add custom colors to both TailwindCSS and Mantine (color variants inspired from [DaisyUI Color](https://daisyui.com/docs/colors/) - theme Emeral)
  - [x] Configure emotion to be used with Vite using [tutorial](https://dev.to/glocore/configure-emotion-with-your-vite-react-project-7jl)
  - Mantine component customization is based on the Mantine component docs
  - CSS that does not related to Mantine component is written using TailwindCSS
  - In case of needed, component style is written using CSS-in-JS supported by [Emotion](https://emotion.sh/docs/introduction)
- [x] Making Http call using [Axios](https://github.com/axios/axios)
- [x] [Mirage](https://miragejs.com/) - mock http api result for testing and development usage
