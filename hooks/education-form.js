import { useState, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from 'context/alert';
import userServices from 'services/user';
import profileServices from 'services/profile';

function useEducationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useContext(alertContext.AlertContext);
  const { user } = userServices.useGetUser();

  const validationSchema = Yup.object().shape({
    school_name: Yup.string().required('This field is required'),
    graduation_time: Yup.string().required('This field is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await profileServices.education(data, user);
      showAlert({
        alertType: 'success',
        autoHide: true,
        alertMessage: 'Education Updated!',
      });
    } catch (error) {
      showAlert({
        alertType: 'error',
        autoHide: true,
        alertMessage: 'Something went wrong!',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const submit = handleSubmit(onSubmit);

  return { register, errors, submit, isLoading };
}

export default useEducationForm;
