import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {useResultContext} from '../contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
  const {results, isLoading,getResults,searchTerm} = useResultContext()
  const location=useLocation()

  if(isLoading) return <Loading />
  console.log(location.pathname)


  
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56"></div>
      )
      case '/images':
      return "IMages"
      case '/news':
      return "news"
      case '/videos':
      return "vdeos"
  
    default:
      return "ERROR"
  }
}

export default Results