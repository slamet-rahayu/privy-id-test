import React from 'react';

export default function TodayDate() {
  const date = new Date().toDateString();
  return <p className="right-grid-date mb-5">Today {date}</p>;
}
