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
            <h3 className="form-heading mb-4 pb-3">Login Account</h3>
            <div className="form-group mb-4">
              <div className="input-label mb-2">Phone Number</div>
              <input className="input-text" type="text" name="phone" />
            </div>
            <div className="form-group">
              <div className="input-label mb-2">Password</div>
              <input className="input-text" type="password" name="password" />
            </div>
          </div>
          <div className="btn-form-container mt-5 pt-5">
            <button type="reset" className="btn btn-outlined mr-3">
              Reset
            </button>
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
