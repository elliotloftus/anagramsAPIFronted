
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://peaceful-stream-39279.herokuapp.com'
  })
}