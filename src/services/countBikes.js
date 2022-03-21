import { apiCountBikesStolen } from '../constants/apis'
import { API_URL } from "../constants/settings";

const fromApiResponseToCounter = apiResponse => {
  const {stolen = 0} = apiResponse
  return stolen
}

export default function getCountBikes () {
  const apiURL = `${API_URL}${apiCountBikesStolen}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToCounter)
}