import React from 'react';
import Link from 'next/link';

export default function Tab() {
  return (
    <div className="tab-container">
      <Link href="/login">
        <div className="tab-btn p-2 mr-4">Login</div>
      </Link>
      <Link href="/register">
        <div className="tab-btn tab-btn-active p-2">Registration</div>
      </Link>
    </div>
  );
}
