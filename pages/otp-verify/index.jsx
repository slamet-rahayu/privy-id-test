import React from 'react';

export default function Login() {
  const date = new Date().toISOString();
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
            <div className="alert-warning mt-3">
              <img
                src="/exclamation.png"
                alt="exclamation-logo"
                width="20"
                height="20"
                className="mr-3"
              />
              <p className="alert-text">We sent OTP to 0871****921</p>
              <button type="button" className="alert-btn-close">
                <img src="/times.png" alt="times" width="14" height="14" />
              </button>
            </div>
          </div>
        </div>
        <div className="right-grid">
          <p className="right-grid-date mb-5">Today {date}</p>
          <form>
            <div className="form-container mt-5">
              <h3 className="form-heading mb-1">OTP Verification</h3>
              <p className="form-sub mb-3 pb-3">
                Insert OTP code sent to your phone
              </p>
              <div className="form-otp mb-4">
                <input
                  className="input-otp"
                  type="text"
                  name="otp-1"
                  maxLength="1"
                />
                <input
                  className="input-otp"
                  type="text"
                  name="otp-2"
                  maxLength="1"
                />
                <input
                  className="input-otp"
                  type="text"
                  name="otp-3"
                  maxLength="1"
                />
                <input
                  className="input-otp"
                  type="text"
                  name="otp-4"
                  maxLength="1"
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
