import axios from 'axios'

const httpApi = axios.create({
  baseURL: `http://localhost:3000/`,
})

export default httpApi
