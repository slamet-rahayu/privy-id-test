import React from 'react';
import Tab from '../../../components/tab';

export default function Login() {
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
          </div>
        </div>
        <div className="right-grid">
          <div className="form-profile-card">
            <h1 className="profile-name mb-2">Wong Fei Hung</h1>
            <p className="profile-id mb-5 pb-3">Level 1 - #SG769891</p>
            <Tab />
            <form>
              <div className="form-container mt-5">
                <h3 className="form-heading">Personal Information</h3>
                <p className="form-sub  mb-4 pb-3">Your personal data</p>
                <div className="form-grid">
                  <div className="form-left pr-4">
                    <div className="form-heading mb-3 pb-3">Product detail</div>
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">
                        Name <sup>*</sup>
                      </div>
                      <input className="input-text" type="text" name="Name" />
                    </div>
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">Gender</div>
                      <select name="gender" className="input-select">
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">Date of Birth</div>
                      <input
                        className="input-date"
                        type="date"
                        name="dateofbirth"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <div className="input-label mb-2">Wethon</div>
                      <select name="gender" className="input-select">
                        <option value="">Aquaman</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="input-label mb-2">Bio</div>
                      <textarea
                        name="bio"
                        className="input-text-area"
                        placeholder="write your bio here"
                      />
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
                        name="bio"
                        className="input-text-area"
                        placeholder="write your bio here"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-form-container mt-5 pt-5">
                <button type="button" className="btn-outlined mr-3">
                  Discard
                </button>
                <button type="submit" className="btn">
                  Update
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
