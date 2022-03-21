import {useContext, useEffect, useState} from 'react'
import getBikes from '../services/getBikes'
import BikesContext from '../context/BikesContext'

const INITIAL_PAGE = 1

export function useBikes ({  query } = { query: '' }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const {bikes , setBikes} = useContext(BikesContext)

  useEffect(function () {
    setLoading(true)

    getBikes({ page })
      .then( bike => {
        setBikes(bike)
        setLoading(false)
      })
  }, [ query ])

  useEffect(function () {
    setLoading(true)
    setLoadingNextPage(true)

    getBikes({ page })
      .then( nextBikes => {
        setBikes(nextBikes)
        setLoadingNextPage(false)
        setLoading(false)
      })
  }, [ page ])

  return { loading, loadingNextPage, bikes, setPage, page }
}