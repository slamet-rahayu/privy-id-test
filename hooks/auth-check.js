import { useEffect, useState } from 'react';
import userServices from '../services/user';

function useAuthCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const user = userServices.getUser();
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
}

export default useAuthCheck;
