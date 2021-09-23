import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from '../context/alert';
import regexvar from '../util/regex-var';
import registerService from '../services/register';

function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showAlert } = useContext(alertContext.AlertContext);

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(regexvar.phoneRegexpId, 'Please input a valid phone number'),
    password: Yup.string().required('Password is required'),
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
      const registered = await registerService.register({
        phone: data.phone,
        password: data.password,
        country: 'Indonesia',
        latlong: '0',
        device_token: '0',
        device_type: 2,
      });
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          id: registered.data.user.id,
          phone: registered.data.user.phone,
        })
      );
      router.replace('/otp-verify');
    } catch (error) {
      if (error.message.includes('422')) {
        showAlert({
          alertType: 'error',
          autoHide: true,
          alertMessage: 'Phone has already been taken!',
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

export default useRegister;
