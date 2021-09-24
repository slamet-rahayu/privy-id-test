import { useState, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from 'context/alert';
import profileServices from 'services/profile';
import userServices from 'services/user';

function useCareersForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useContext(alertContext.AlertContext);
  const { user } = userServices.useGetUser();

  const validationSchema = Yup.object().shape({
    position: Yup.string().required('This field is required'),
    company_name: Yup.string().required('This field is required'),
    starting_from: Yup.string().required('This field is required'),
    ending_in: Yup.string().required('This field is required'),
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
      // await profileServices.career(data, user);
      showAlert({
        alertType: 'success',
        alertMessage: 'Career updated!',
      });
      console.log(data);
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

  return { register, errors, submit, isLoading, user };
}

export default useCareersForm;
