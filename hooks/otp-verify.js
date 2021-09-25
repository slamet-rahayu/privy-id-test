import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import alertContext from 'context/alert';
import userServices from 'services/user';
import registerService from 'services/register';

function useOtpVerify() {
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();
  const { showAlert } = useContext(alertContext.AlertContext);

  useEffect(() => {
    const userSession = sessionStorage.getItem('user');
    const user = localStorage.getItem('user');
    if (userSession) {
      setUserId(JSON.parse(userSession).id);
    } else if (user) {
      router.replace('/information/form');
    } else if (!userSession) {
      router.replace('/login');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const validationSchema = Yup.object().shape({
    otp1: Yup.string().required(),
    otp2: Yup.string().required(),
    otp3: Yup.string().required(),
    otp4: Yup.string().required(),
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
      const otp = Object.keys(data)
        .map((v) => data[v])
        .join('');
      const user = await registerService.otpMatch(userId, otp);
      localStorage.setItem('user', JSON.stringify(user.data));
      sessionStorage.clear();
      router.replace('/information/form');
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

  function inputFocus(elmnt) {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  }

  async function resendOtp() {
    try {
      setIsLoading(true);
      const user = userServices.getTempUser();
      await registerService.otpRequest('+6281326236867');
      showAlert({
        alertType: 'success',
        autoHide: true,
        alertMessage: `We sent OTP to ${user.phone.substring(
          0,
          4
        )}****${user.phone.slice(-3)}`,
      });
      setSeconds(60);
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

  return {
    inputFocus,
    register,
    submit,
    errors,
    isLoading,
    resendOtp,
    seconds,
  };
}

export default useOtpVerify;
