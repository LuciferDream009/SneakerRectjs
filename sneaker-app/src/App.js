import React, { Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import axios from 'axios';
import {
  useQuery
} from '@tanstack/react-query'
const App = () => {

  // useEffect(() =>{
  //   fetchApi()
  // },[])
  console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll-product`)
    return res.data
  }

    // Queries
    const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
    console.log('query', query)
  return (
    <div>
    <Routes>
      {routes.map((route) => {
          const Page = route.page
          const Layout = route.isShowHeader ? DefaultComponent : Fragment
          return (
            <Route key={route.path} path={route.path} element={<Layout><Page /></Layout>} />
          )
      })} 
    </Routes>
    </div>
  )
}

export default App;