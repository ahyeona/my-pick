import { useNavigate } from 'react-router-dom'
import { AuthForm } from '../../components'
import { loginApi, type AuthProps } from '../../services/authApi';
import { useAuthStore } from '../../store/authStore';
import { LoginContainer } from './Login.style';

const Login = () => {
  const { setAuth } = useAuthStore();

  const nav = useNavigate();

  const loginHandler = async (props: AuthProps) => {
    try {
      const { data } = await loginApi(props);
      setAuth(data.user, data.accessToken);
      nav("/");
    } catch (error: any) {
      alert("로그인 실패");
    }
  }

  return (
    <LoginContainer>
      <AuthForm mode='login' onSubmit={loginHandler} />
    </LoginContainer>
  )
}

export default Login