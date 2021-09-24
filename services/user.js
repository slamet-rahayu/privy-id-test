import { useEffect, useState } from 'react';

function useGetUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return { user };
}

function useGetTempUser() {
  const [tempUser, setTempUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setTempUser(storedUser);
    }
  }, []);

  return { tempUser };
}

const userServices = { useGetUser, useGetTempUser };

export default userServices;
