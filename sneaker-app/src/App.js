import React, { Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonString } from './until';
import { jwtDecode } from "jwt-decode";
import * as UserService from './service/UserService'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/userSlide'
import FooterComponent from './components/FooterComponent/FooterComponent';
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const {storageData, decoded} = handleDecoded()
      if (decoded?.id) {
        handleGetDetailsUser(decoded?.id, storageData)
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

  // useEffect(() => {
  //   const { storageData, decoded } = handleDecoded();
  //   if (decoded && decoded.exp > (new Date().getTime() / 1000) && decoded.id) {
  //     handleGetDetailsUser(decoded.id, storageData);
  //   }
  // }, []);
  
  // const handleDecoded = () => {
  //   let storageData = localStorage.getItem('access_token');
  //   let decoded = {};
  //   if (storageData && isJsonString(storageData)) {
  //     storageData = JSON.parse(storageData);
  //     try {
  //       decoded = jwtDecode(storageData);
  //     } catch (error) {
  //       console.error("Failed to decode token", error);
  //       localStorage.removeItem('access_token');
  //     }
  //   }
  //   return { decoded, storageData };
  // }
  

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

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }

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