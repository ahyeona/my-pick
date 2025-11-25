import type { ReactNode } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const NavStyle = styled.div`
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.navBg};
`

const Nav = ({children} : {children? : ReactNode}) => {
  const nav = useNavigate();
  const { user, clearAuth } = useAuthStore.getState();

  return (
    <NavStyle>
      <Logo />
      <SearchBar onChange={()=>{}}/>
      <ThemeToggle />
      { user ? 
        <Button text='logout' onClick={()=>{ clearAuth() }} />
         : 
        <Button text='login' onClick={()=>{nav("/login")}} />
      }
      <Button text='mypick' onClick={()=>{nav("/mypick")}} />
      
      {/* {children} */}
    </NavStyle>
  )
}

export default Nav