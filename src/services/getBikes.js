import {API_URL} from '../constants/settings'

const fromApiResponseToBikes = apiResponse => {
  const {bikes = []} = apiResponse
  if (Array.isArray(bikes)) {
    return bikes
  }
  return []
}

const generateUrlRequest = (per_page, page, query) => {
  const URL = `${API_URL}/search?page=${page}&per_page=${per_page}&stolenness=stolen`
  return !!query ? URL.concat(`&query=${query}`) : URL
}

export default function getBikes(
  {
    per_page = 10,
    page = 1,
    query= ''
  } = {}) {
  const apiURL = generateUrlRequest(per_page, page, query)
  console.log('apiURL', query, apiURL)

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToBikes)
}