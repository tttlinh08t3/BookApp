import axios from 'axios'

export default{
  getBookList () {
    return axios.get('./test-data/book-list.json')
  },
  getMessage () {
    let AXIOS = axios.create({
      baseURL: 'http://localhost:8080'
    })
    return AXIOS.get('products/test')
  }
}
