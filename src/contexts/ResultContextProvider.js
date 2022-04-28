import {React, createContext, useContext, useState} from 'react'

const ResultContext=createContext()
const baseUrl='https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider=({children})=>{

    const [results, setResults]=useState([])
    const[isLoading, setIsLoading]=useState(false)
    const [searchTerm,setSearchTerm]=useState('JS Mastery')

    //search /images/ videos type prop
   const getResults= async (type)=>{
       setIsLoading(true)

       const response =await fetch (`${baseUrl}${type}`,{
           method: 'GET',
           headers:{
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': '1c03fdca9bmshd8f34550b6b62c3p1d939ejsnb8f28c1718e9'
           }
       })

       const data= await response.json()
       console.log(data)
       setResults(data)
       setIsLoading(false)

   } 

   return(
       <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
           {children}
       </ResultContext.Provider>
   )


}

export const useResultContext=()=> useContext(ResultContext)