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
                <h3 className="form-heading">Education Information</h3>
                <p className="form-sub mb-4 pb-3">
                  Information about your education
                </p>
                <div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">School Name</div>
                    <input className="input-text" type="text" name="company" />
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-label mb-2">Graduation Time</div>
                    <input
                      className="input-date"
                      type="date"
                      name="dateofbirth"
                    />
                  </div>
                  <div className="btn-form-container mt-1 pt-1 mb-5 pb-5">
                    <button type="button" className="btn-outlined mr-3">
                      Discard
                    </button>
                    <button type="submit" className="btn">
                      Add Education
                    </button>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="career-company">PT Erkananta</h3>
                  <p className="career-time">Jul 7, 2020 - Jul 7, 2021</p>
                </div>
                <div className="my-4">
                  <h3 className="career-company">PT Erkananta</h3>
                  <p className="career-time">Jul 7, 2020 - Jul 7, 2021</p>
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
