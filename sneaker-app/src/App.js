import React, { Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import axios from 'axios';
import {
  useQuery
} from '@tanstack/react-query'
import { isJsonString } from './until';
import { jwtDecode } from "jwt-decode";
import * as UserService from './service/UserService'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/userSlide'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const {storageData, decoded} = handleDecoded()
      if (decoded?.id) {
        handleGetDetailUser(decoded?.id, storageData)
      }
  }, [])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
       decoded = jwtDecode(storageData)
    }
    return { decoded, storageData}
  }

  // Add a request interceptor
  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const { decoded} = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000 ) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data.access_token}`
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDatailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
    console.log('res', res)
  }


  // console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/getAll-product`)
  //   return res.data
  // }

  // // Queries
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  // console.log('query', query)
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