import './App.css'
import Router from './router';
import { useTheme } from './context/ThemeContext'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';
import { profileApi, refreshApi } from './services/authApi';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const { themeName } = useTheme();

  const getToken = async () => {
    try {
      const { data } = await refreshApi();
      useAuthStore.getState().setAccessToken(data.accessToken);

      const user = await profileApi();
      useAuthStore.getState().setUser(user.data.user);

    } catch (err) {
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App