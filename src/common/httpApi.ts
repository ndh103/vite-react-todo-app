import axios from 'axios'

const httpApi = axios.create({
  baseURL: `http://api.my-site.com/`,
})

export default httpApi
