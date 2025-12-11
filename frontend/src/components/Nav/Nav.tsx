import { useNavigate } from 'react-router-dom'
import { NavStyle } from './Nav.style'
import { useAuthStore } from '../../store/authStore';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { logoutApi } from '../../services/authApi';

const Nav = () => {
  const nav = useNavigate();
  const { user, clearAuth } = useAuthStore();

  return (
    <NavStyle>
      <Logo />
      <ThemeToggle />
      {user ?
        <>
          <p>{user.email + "님"}</p>
          <Button text='logout' width='100px' onClick={async () => {
            await logoutApi();
            clearAuth();
          }} />
        </>
        :
        <Button text='login' width='100px' onClick={() => { nav("/login") }} />
      }
      <Button text='mypick' width='100px' onClick={() => { nav("/mypick") }} />

    </NavStyle>
  )
}

export default Nav