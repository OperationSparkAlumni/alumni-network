import React, {
  createContext,
  useState,
  useContext,
} from 'react';

import anon from '../assets/anon.svg';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const userData = {
    nameFirst: 'Test',
    nameLast: 'User',
    image: anon,
  };
  const onLogin = () => setIsAuth(true);
  const onLogout = () => setIsAuth(false);
  const value = { isAuth, userData, onLogin, onLogout };

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuthContext };
