import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Main, Mypick, Signup } from '../pages';
import AuthRoute from './AuthRoute';
import { Nav } from '../components';


const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/mypick' element={<AuthRoute><Mypick /></AuthRoute>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router