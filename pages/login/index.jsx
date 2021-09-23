/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useRouter } from 'next/router';
import TodayDate from 'components/today-date';
import tablink from 'data/tablink';
import Tab from 'components/tab';
import useLogin from 'hooks/login';
import Alert from 'components/alert';
import ErrorFeedback from 'components/errorfeedback';

export default function Login() {
  const { register, errors, submit, isLoading } = useLogin();
  const { asPath } = useRouter();
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
          <Tab routes={tablink.linkAuth} active={asPath} />
          <form onSubmit={submit}>
            <div className="form-container mt-5">
              <h3 className="form-heading mb-4 pb-3">Login Account</h3>
              <div className="form-group mb-4">
                <div className="input-label mb-2">Phone Number</div>
                <input
                  className={`input-text ${
                    errors.phone ? 'input-invalid' : ''
                  }`}
                  type="text"
                  name="phone"
                  {...register('phone')}
                />
                {errors.phone && (
                  <ErrorFeedback message={errors.phone.message} />
                )}
              </div>
              <div className="form-group">
                <div className="input-label mb-2">Password</div>
                <input
                  className={`input-text ${
                    errors.password ? 'input-invalid' : ''
                  }`}
                  type="password"
                  name="password"
                  {...register('password')}
                />
                {errors.password && (
                  <ErrorFeedback message={errors.password.message} />
                )}
              </div>
            </div>
            <div className="btn-form-container mt-5 pt-5">
              <button type="button" className="btn btn-outlined mr-3">
                Reset
              </button>
              <button type="submit" className="btn">
                Login {isLoading && <i className="fa fa-spin fa-spinner" />}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-outer" />
    </div>
  );
}
