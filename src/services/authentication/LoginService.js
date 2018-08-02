import axios from 'axios'

export default {
  login (credentials) {
    return axios.post('http://localhost:8080/login', credentials)
  }
}
