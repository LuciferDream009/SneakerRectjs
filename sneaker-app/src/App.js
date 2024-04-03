import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';



const App = () => {
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