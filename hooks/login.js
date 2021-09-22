import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import regexvar from '../util/regex-var';
import authService from '../services/auth';

function useLogin() {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(regexvar.phoneRegexpId, 'Please input a valid phone number')
      .required('Phone number is required'),
    password: Yup.string().required('Password is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data, events) {
    try {
      const user = await authService.login(data.phone, data.password);
      localStorage.setItem('user', JSON.stringify(user.data));
      router.push('/information/form');
    } catch (error) {
      console.log(error.message);
      events.target.reset();
    }
  }

  const submit = handleSubmit(onSubmit);

  return { register, errors, submit };
}

export default useLogin;
