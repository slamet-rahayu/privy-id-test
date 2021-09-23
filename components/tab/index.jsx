import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Tab({ routes, active }) {
  return (
    <div className="tab-container">
      {routes.map((v) => {
        return (
          <Link href={v.route} key={v.route}>
            <div
              className={`tab-btn ${
                active.includes(v.route) ? 'tab-btn-active' : ''
              } p-2 mr-4`}
            >
              {v.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

Tab.propTypes = {
  routes: PropTypes.instanceOf(Array).isRequired,
  active: PropTypes.string.isRequired,
};
