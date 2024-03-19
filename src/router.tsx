import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodoPage } from './pages/TodoPage'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { NoMatch } from './pages/NoMatch'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}
