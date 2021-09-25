import { useState, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from 'context/alert';
import userServices from 'services/user';
import profileServices from 'services/profile';

function useProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useContext(alertContext.AlertContext);
  const { user } = userServices.useGetUser();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    gender: Yup.string().required('This field is required'),
    birthday: Yup.string().required('This field is required'),
    hometown: Yup.string().required('This field is required'),
    bio: Yup.string().required('This field is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  async function onSubmit(data, events) {
    try {
      setIsLoading(true);
      await profileServices.update(data, user);
      showAlert({
        alertType: 'success',
        autoHide: true,
        alertMessage: 'Profile Updated!',
      });
    } catch (error) {
      showAlert({
        alerType: 'error',
        autoHide: true,
        alertMessage: 'Something went wrong!',
      });
    } finally {
      setIsLoading(false);
      events.target.reset();
    }
  }

  const submit = handleSubmit(onSubmit);

  return { register, errors, submit, isLoading };
}

export default useProfileForm;
