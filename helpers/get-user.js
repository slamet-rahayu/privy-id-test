import { useEffect, useState } from 'react';

function useGetUser() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    const userstr = localStorage.getItem('user');
    if (userstr) {
      const userarr = JSON.parse(userstr);
      setUserAuth(userarr);
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated, userAuth };
}

export default { useGetUser };
