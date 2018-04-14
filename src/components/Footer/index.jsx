import React from 'react';
import header from '../../assets/images/header.jpg';
import divider from '../../assets/images/divider.png';
import { Twitter, Facebook, Instagram } from 'react-feather';

export default function Hero() {
  return (
    <footer className="fdb-block footer-large">
      <div className="row justify-content-center mb-5">
        <iframe
          src="https://open.spotify.com/embed?uri=spotify:user:1166812714:playlist:2fsBeDoBif12JGdspaiTa8&theme=white"
          width="300"
          height="80"
          frameBorder="0"
          allowTransparency="true"
        />
      </div>

      <div className="d-flex justify-content-center mb-3">
        <img src={divider} className="img-fluid" />
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h3>#aliceeandrea</h3>
            <p>
              12 maggio 2018<br />Trescore Balneario
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
