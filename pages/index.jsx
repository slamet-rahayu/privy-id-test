import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.replace('/information/form');
    } else {
      router.replace('/login');
    }
  }, []);
  return null;
}
