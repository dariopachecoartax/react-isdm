import { createContext, useContext, useEffect, useState } from 'react';
import { getSession, onAuthStateChange } from '../services/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [sesion, setSesion] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getSession().then((sesionGuardada) => {
      setSesion(sesionGuardada);
      setCargando(false);
    });

    const { data } = onAuthStateChange((sesionNueva) => setSesion(sesionNueva));

    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ sesion, cargando }}>
      {children}
    </AuthContext.Provider>
  );
}

// El handout pide el provider y el hook useAuth en este mismo archivo.
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
