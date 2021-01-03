import axios from 'axios'
import { filterNotNull } from '@/utils/searchUtils'

var getPlaces = () => {
  return axios.get('http://localhost:8081/places', {
    header: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

var search = name => {
  var body = {
    filterBy: filterNotNull([{ name: name }])
  }
  return axios.post('http://localhost:8081/places/search', body, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
}

export { getPlaces, search }
