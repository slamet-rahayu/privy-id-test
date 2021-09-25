import React from 'react';
import { useRouter } from 'next/router';
import tablink from 'data/tablink';
import Tab from 'components/tab';
import useGallery from 'hooks/gallery';

export default function Login() {
  const { asPath } = useRouter();
  const { isLoading, isError, gallery } = useGallery();
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
            <Tab routes={tablink.linkProfile} active={asPath} />
            <form>
              <div className="form-container mt-5">
                <h3 className="form-heading">Gallery</h3>
                <p className="form-sub mb-4 pb-3">Upload your special moment</p>
                <div className="gallery-card-container">
                  {!isLoading &&
                    !isError &&
                    gallery.map((v) => {
                      return (
                        <div key={v.id} className="gallery-card">
                          <img
                            src={v.picture.url}
                            alt={v.id}
                            className="gallery-img"
                          />
                        </div>
                      );
                    })}
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
