import { useState, useEffect } from 'react';
import userServices from 'services/user';
import profileServices from 'services/profile';

function useGallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [gallery, setGallery] = useState([]);
  const { user } = userServices.useGetUser();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchGallery = await profileServices.getProfile(user);
        setGallery(fetchGallery.data.user.user_pictures);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    if (user) {
      fetchData();
    }
  }, [user]);

  return { isLoading, isError, gallery };
}

export default useGallery;
