import React from 'react';
import HomeStatus from './HomeStatus';
import HomePosted from './HomePosted';
import LikeButton from './LikeButton';

const HomeDetail = ({
  home, handleContentClick, price, sqft,
}) => (
  <>
    <LikeButton />
    <div className="home-content-box" onClick={handleContentClick(home)}>
      <div className="home-photo-inline-top">
        <ul className="home-posted-inline">
          <HomePosted home={home} />
        </ul>
      </div>
    </div>
    <div className="home-photo-card-content">
      <div className="home-photo-card-caption">
        <h4 className="home-photo-card-spec">
          <HomeStatus status={home.status} />
        </h4>
        <p className="home-photo-card-spec">
          <span className="home-photo-card-price">
            $
            {price}
            {' '}

          </span>
          <span className="home-photo-card-spec">
            <span>
              <span className="property-beds">
                {home.bedrooms}
                {' '}
                bds
              </span>
              <span className="property-baths">
                {home.bathrooms}
                {' '}
                ba
              </span>
              <span className="property-area">
                {sqft}
                {' '}
                sqft
              </span>
            </span>
          </span>
        </p>
        <p className="home-photo-card-spec-address">
          <span className="home-photo-card-address">
            {home.street}
            ,
            {home.city}
            ,
            {home.state}
            ,
            {home.zipcode}
          </span>
        </p>
      </div>
    </div>
  </>
);

export default HomeDetail;
