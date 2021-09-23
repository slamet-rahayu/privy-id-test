import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from 'context/alert';
import regexvar from 'util/regex-var';
import authServices from 'services/auth';
import registerService from 'services/register';

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showAlert } = useContext(alertContext.AlertContext);

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(regexvar.phoneRegexpId, 'Please input a valid phone number'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Please Input at least 8 character'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const commonError = {
    alertType: 'error',
    autoHide: true,
    alertMessage: 'Something went wrong!',
  };

  const authError = {
    alertType: 'error',
    autoHide: true,
    alertMessage: 'Incorrect username or password!',
  };

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const user = await authServices.login(data.phone, data.password);
      localStorage.setItem('user', JSON.stringify(user.data));
      router.push('/information/form');
    } catch (error) {
      if (error.message.includes('422')) {
        showAlert(authError);
      } else if (error.message.includes('401')) {
        try {
          const user = await registerService.otpRequest(data.phone);
          sessionStorage.setItem(
            'user',
            JSON.stringify({
              id: user.data.user.id,
              phone: user.data.user.phone,
            })
          );
          router.replace('/otp-verify');
        } catch (err) {
          showAlert(commonError);
        }
      } else {
        showAlert(commonError);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const submit = handleSubmit(onSubmit);

  return { register, errors, submit, isLoading };
}

export default useLogin;
