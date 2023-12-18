import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasicLayout from './components/BasicLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import UsersPage from './pages/UsersPage.jsx'
import UserDetailPage from './pages/UserDetailPage.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const App = () => {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BasicLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path='/users'>
                  <Route index element={<ProtectedRoute><UsersPage/></ProtectedRoute> }/>
                  <Route path=':userId' element={<ProtectedRoute><UserDetailPage /></ProtectedRoute>}/>
              </Route>
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    )
}

export default App