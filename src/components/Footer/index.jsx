import React from 'react';
import header from '../../assets/images/header.jpg';

export default function Hero() {
  return (
    <footer className="fdb-block footer-large">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h3>Company Name</h3>
            <p>
              70 Bowman St.<br />South Windsor, CT 06074
            </p>
            <p>USA</p>
            <p>+13 827 312 5002</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-h3">
              <a href="https://www.froala.com">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>{' '}
              &nbsp; &nbsp;
              <a href="https://www.froala.com">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>{' '}
              &nbsp; &nbsp;
              <a href="https://www.froala.com">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>{' '}
              &nbsp; &nbsp;
              <a href="https://www.froala.com">
                <i className="fa fa-pinterest" aria-hidden="true" />
              </a>{' '}
              &nbsp; &nbsp;
              <a href="https://www.froala.com">
                <i className="fa fa-google" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
