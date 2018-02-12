import React from 'react';
import header from '../../assets/images/header.jpg';

export default function Hero() {
  return (
    <div>
      <section
        className="fdb-block d-flex align-items-center filter-valencia"
        style={{ backgroundImage: `url(${header})`, height: '60vh' }}
      />
      <div className="container mt-3 text-center">
        <p className="mb-0 text-uppercase text-muted">
          12 May 2018 - Trescore B.rio
        </p>
      </div>
    </div>
  );
}
