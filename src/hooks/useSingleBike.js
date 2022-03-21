import {useState, useEffect} from "react";
import {useBikes} from "./useBikes";
import getSingleBike from "../services/getSingleBike";

export default function useSingleBike( { caseId }) {
  const { bikes } = useBikes()
  const bikesFromCache = bikes.find(singleBike => singleBike.id === caseId)

  const [bike, setBike] = useState(bikesFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError,] = useState(false)

  useEffect( function () {
    if (!bike) {
      setIsLoading(true)

      getSingleBike({  caseId })
        .then( bike => {
          setBike( bike )
          setIsLoading(false)
          setIsError(false)
        }).catch( () => {
          setIsLoading(false)
          setIsError(true)
      })
    }
  }, [ bike, caseId ] )

  return { bike, isLoading, isError }

}