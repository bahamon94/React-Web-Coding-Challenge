import {API_URL} from '../constants/settings'

const fromApiResponseToBike= apiResponse => {
    const { bike = [] } = apiResponse
    return bike
}

export default function getSingleBike ({ caseId }) {
  return fetch(`${API_URL}/bikes/${caseId}`)
    .then(res => res.json())
    .then(fromApiResponseToBike)
}