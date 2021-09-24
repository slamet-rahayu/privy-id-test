/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useRouter } from 'next/router';
import tablink from 'data/tablink';
import Tab from 'components/tab';
import Alert from 'components/alert';
import useEducationForm from 'hooks/education-form';
import ErrorFeedback from 'components/errorfeedback';

export default function EducationForm() {
  const { pathname } = useRouter();
  const { register, errors, submit, isLoading } = useEducationForm();
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
                <h3 className="form-heading">Education Information</h3>
                <p className="form-sub mb-4 pb-3">
                  Information about your education
                </p>
                <div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">School Name</div>
                    <input
                      className={`input-text ${
                        errors.school_name ? 'input-invalid' : ''
                      }`}
                      type="text"
                      {...register('school_name')}
                    />
                    {errors.school_name && (
                      <ErrorFeedback message={errors.school_name.message} />
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">Graduation Time</div>
                    <input
                      className={`input-text ${
                        errors.graduation_time ? 'input-invalid' : ''
                      }`}
                      type="date"
                      {...register('graduation_time')}
                    />
                    {errors.graduation_time && (
                      <ErrorFeedback message={errors.graduation_time.message} />
                    )}
                  </div>
                  <div className="btn-form-container mt-1 pt-1">
                    <button type="button" className="btn-outlined mr-3">
                      Discard
                    </button>
                    <button type="submit" className="btn btn-contained">
                      Update Education{' '}
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
