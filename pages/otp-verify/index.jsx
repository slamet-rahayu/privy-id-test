/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/tabindex-no-positive */
import React from 'react';
import Alert from 'components/alert';
import useOtpVerify from 'hooks/otp-verify';
import TodayDate from 'components/today-date';

export default function Login() {
  const { inputFocus, register, submit, errors } = useOtpVerify();
  return (
    <div className="ccontainer">
      <div className="left-outer" />
      <div className="root">
        <div className="left-grid">
          <div className="c-logo-container">
            <img
              src="/logo.png"
              alt="logo"
              className="mr-3"
              width={32}
              height={32}
            />
            <h1 className="c-logo-text">COINPRIVY</h1>
          </div>
          <div className="left-grid-content mt-5 pt-3">
            <h2 className="left-grid-heading mb-3">Welcome to Coinprivy</h2>
            <p className="left-grid-sub">
              is a secure platform that makes it easy to buy, sell, and store
              cryptocurrency like Bitcoin, Ethereum, and more. Based in the USA
            </p>
            <Alert />
          </div>
        </div>
        <div className="right-grid">
          <TodayDate />
          <form onSubmit={submit}>
            <div className="form-container mt-5">
              <h3 className="form-heading mb-1">OTP Verification</h3>
              <p className="form-sub mb-3 pb-3">
                Insert OTP code sent to your phone
              </p>
              <div className="form-otp mb-4">
                <input
                  className={`input-otp ${errors.otp1 ? 'input-invalid' : ''}`}
                  type="text"
                  name="otp1"
                  maxLength="1"
                  tabIndex="1"
                  autoFocus
                  onKeyUp={inputFocus}
                  {...register('otp1')}
                />
                <input
                  className={`input-otp ${errors.otp1 ? 'input-invalid' : ''}`}
                  type="text"
                  name="otp2"
                  maxLength="1"
                  tabIndex="2"
                  onKeyUp={inputFocus}
                  {...register('otp2')}
                />
                <input
                  className={`input-otp ${errors.otp1 ? 'input-invalid' : ''}`}
                  type="text"
                  name="otp3"
                  maxLength="1"
                  tabIndex="3"
                  onKeyUp={inputFocus}
                  {...register('otp3')}
                />
                <input
                  className={`input-otp ${errors.otp1 ? 'input-invalid' : ''}`}
                  type="text"
                  name="otp4"
                  maxLength="1"
                  tabIndex="4"
                  onKeyUp={inputFocus}
                  {...register('otp4')}
                />
                <button type="submit" className="btn-contained">
                  Verify
                </button>
              </div>
            </div>
            <div className="form-link-container my-4 py-2">
              <img
                src="/reverse.png"
                alt="reverse"
                width="20"
                height="20"
                className="mr-2"
              />
              <p className="form-link">Resend OTP Code</p>
            </div>
          </form>
        </div>
      </div>
      <div className="right-outer" />
    </div>
  );
}
