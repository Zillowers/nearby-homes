import React from 'react';

const getPostedDateFromNow = (dateOfPosting) => {
  const dateArr = dateOfPosting.split('T');
  const date = dateArr[0].replace(/-/g, '/');
  const date1 = new Date(date);
  const date2 = new Date();
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};

const HomePosted = ({ home }) => {
  return home.status === 'OFF MARKET' ? (
    <li className="photo-count">1 photo</li>
  ) : (
    <div className="home-posted-date">
      {getPostedDateFromNow(home.datetime)} days on Zillow
    </div>
  );
};

export default HomePosted;
