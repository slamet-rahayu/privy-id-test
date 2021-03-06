/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useRouter } from 'next/router';
import tablink from 'data/tablink';
import Tab from 'components/tab';
import Alert from 'components/alert';
import useProfileForm from 'hooks/profile';
import ErrorFeedback from 'components/errorfeedback';

export default function InfromationForm() {
  const { pathname } = useRouter();
  const { isLoading, submit, errors, register } = useProfileForm();
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
                <h3 className="form-heading">Personal Information</h3>
                <p className="form-sub  mb-4 pb-3">Your personal data</p>
                <div className="form-grid">
                  <div className="form-left pr-4">
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">
                        Name <sup>*</sup>
                      </div>
                      <input
                        className={`input-text ${
                          errors.name ? 'input-invalid' : ''
                        }`}
                        type="text"
                        {...register('name')}
                      />
                      {errors.name && (
                        <ErrorFeedback message={errors.name.message} />
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">Gender</div>
                      <select
                        className={`input-select ${
                          errors.gender ? 'input-invalid' : ''
                        }`}
                        {...register('gender')}
                      >
                        <option value="">Gender</option>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                      </select>
                      {errors.gender && (
                        <ErrorFeedback message={errors.gender.message} />
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">Date of Birth</div>
                      <input
                        className={`input-date ${
                          errors.birthday ? 'input-invalid' : ''
                        }`}
                        type="date"
                        {...register('birthday')}
                      />
                      {errors.birthday && (
                        <ErrorFeedback message={errors.birthday.message} />
                      )}
                    </div>
                    <div className="form-group">
                      <div className="input-label mb-2">Bio</div>
                      <textarea
                        className={`input-text-area ${
                          errors.bio ? 'input-invalid' : ''
                        }`}
                        placeholder="write your bio here"
                        {...register('bio')}
                      />
                      {errors.bio && (
                        <ErrorFeedback message={errors.bio.message} />
                      )}
                    </div>
                  </div>
                  <div className="form-right pl-4">
                    <div className="mb-4">
                      <div className="form-heading mb-3">Profile Picture</div>
                      <img
                        src="/profile.png"
                        alt="Profile"
                        width={224}
                        height={224}
                        className="profile-img"
                      />
                      <button type="button" className="btn-upload mt-4">
                        Upload
                      </button>
                    </div>
                    <div className="form-group">
                      <div className="input-label mb-2">Address</div>
                      <textarea
                        className={`input-text-area ${
                          errors.hometown ? 'input-invalid' : ''
                        }`}
                        placeholder="write your bio here"
                        {...register('hometown')}
                      />
                      {errors.hometown && (
                        <ErrorFeedback message={errors.hometown.message} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-form-container mt-5">
                <button type="button" className="btn-outlined mr-3">
                  Discard
                </button>
                <button type="submit" className="btn-contained">
                  Update {isLoading && <i className="fa fa-spin fa-spinner" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="right-outer" />
    </div>
  );
}
