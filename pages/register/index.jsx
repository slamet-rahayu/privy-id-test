import React from 'react';
import Tab from '../../components/tab';

export default function Login() {
  const date = new Date().toISOString();
  return (
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
        <p className="right-grid-date mb-5">Today {date}</p>
        <Tab />
        <form>
          <div className="form-container mt-5">
            <h3 className="form-heading mb-1">Create New Account</h3>
            <p className="form-sub mb-4 pb-3">
              Before you can invest here, please create new account
            </p>
            <h3 className="form-heading mt-1 mb-2">Account Detail</h3>
            <div className="form-group mb-4">
              <div className="input-label mb-2">Select Country</div>
              <select name="country" className="input-select">
                <option>Indonesia (+62)</option>
              </select>
            </div>
            <div className="form-group mb-4">
              <div className="input-label mb-2">Phone Number</div>
              <input className="input-text" type="text" name="phone" />
            </div>
            <div className="form-group">
              <div className="input-label mb-2">Password</div>
              <input className="input-text" type="password" name="password" />
            </div>
          </div>
          <div className="form-link-container my-4 py-2">
            <img
              src="/cloud-download.png"
              alt="cloud download"
              width="24"
              height="16"
              className="mr-2"
            />
            <p className="form-link">Terms and conditions</p>
          </div>
          <div className="btn-form-container">
            <button type="reset" className="btn btn-outlined mr-3">
              Reset
            </button>
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
