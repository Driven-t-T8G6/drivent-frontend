import { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import * as authServices from '../../services/authApi';
import { toast } from 'react-toastify';

export default function GithubAuth() {
  const location = useLocation();
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(async() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    try {
      const user = await authServices.githubAuth(code);
      toast('Login realizado com sucesso!');
      setUserData(user);
      navigate('/dashboard');
    }
    catch {
      toast('Ocorreu um erro durante o login');
    }
  }, []);
  
  return (<></>);
}
