import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from '../context/alert';
import regexvar from '../util/regex-var';
import authService from '../services/auth';

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showAlert } = useContext(alertContext.AlertContext);

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(regexvar.phoneRegexpId, 'Please input a valid phone number')
      .required('Phone number is required'),
    password: Yup.string().required('Password is required'),
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
      const user = await authService.login(data.phone, data.password);
      localStorage.setItem('user', JSON.stringify(user.data));
      router.push('/information/form');
    } catch (error) {
      if (error.message.includes('422')) {
        showAlert({
          alertType: 'error',
          autoHide: true,
          alertMessage: 'Incorrect username or password!',
        });
      } else {
        showAlert({
          alertType: 'error',
          autoHide: true,
          alertMessage: 'Internal Server Error!',
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  const submit = handleSubmit(onSubmit);

  return { register, errors, submit, isLoading };
}

export default useLogin;
