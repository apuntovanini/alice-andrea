import React from 'react';
import header from '../../assets/images/header.jpg';

import { Twitter, Facebook, Instagram } from 'react-feather';

export default function Hero() {
  return (
    <footer className="fdb-block footer-large">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h3>#aliceeandrea</h3>
            <p>
              12 maggio 2018<br />Trescore Balneario
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-h3">
              <a href="https://www.froala.com">
                <Twitter />
              </a>{' '}
              &nbsp; &nbsp;
              <a href="https://www.froala.com">
                <Facebook />
              </a>{' '}
              &nbsp; &nbsp;
              <a href="https://www.froala.com">
                <Instagram />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
