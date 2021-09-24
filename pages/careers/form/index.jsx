/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useRouter } from 'next/router';
import tablink from 'data/tablink';
import Tab from 'components/tab';
import useCareersForm from 'hooks/careers-form';
import ErrorFeedback from 'components/errorfeedback';
import Alert from 'components/alert';

export default function Login() {
  const { pathname } = useRouter();
  const { register, errors, submit, isLoading } = useCareersForm();
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
          <div className="form-profile-card">
            <h1 className="profile-name mb-2">Wong Fei Hung</h1>
            <p className="profile-id mb-5 pb-3">Level 1 - #SG769891</p>
            <Tab routes={tablink.linkProfile} active={pathname} />
            <form onSubmit={submit}>
              <div className="form-container mt-5">
                <h3 className="form-heading">Career Information</h3>
                <p className="form-sub mb-4 pb-3">
                  Information about your career
                </p>
                <div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">Company Name</div>
                    <input
                      className={`input-text ${
                        errors.company_name ? 'input-invalid' : ''
                      }`}
                      type="text"
                      {...register('company_name')}
                    />
                    {errors.company_name && (
                      <ErrorFeedback message={errors.company_name.message} />
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">Position</div>
                    <input
                      className={`input-text ${
                        errors.position ? 'input-invalid' : ''
                      }`}
                      type="text"
                      {...register('position')}
                    />
                    {errors.position && (
                      <ErrorFeedback message={errors.position.message} />
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">Start From</div>
                    <input
                      className={`input-date ${
                        errors.starting_from ? 'input-invalid' : ''
                      }`}
                      type="date"
                      {...register('starting_from')}
                    />
                    {errors.starting_from && (
                      <ErrorFeedback message={errors.starting_from.message} />
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">Ending In</div>
                    <input
                      className={`input-date ${
                        errors.ending_in ? 'input-invalid' : ''
                      }`}
                      type="date"
                      {...register('ending_in')}
                    />
                    {errors.ending_in && (
                      <ErrorFeedback message={errors.ending_in.message} />
                    )}
                  </div>
                  <div className="btn-form-container mt-1 pt-1">
                    <button type="button" className="btn-outlined mr-3">
                      Discard
                    </button>
                    <button type="submit" className="btn-contained">
                      Add Career{' '}
                      {isLoading && <i className="fa fa-spin fa-spinner" />}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="right-outer" />
    </div>
  );
}
