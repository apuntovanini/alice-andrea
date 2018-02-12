import React from 'react';
import header from '../../assets/images/header.jpg';

export default function Hero() {
  return (
    <section className="fdb-block team-1">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-8">
            <h1>Our Team</h1>
            <p className="text-h3">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>
        </div>

        <div className="row-50" />

        <div className="row">
          <div className="col-sm-3 text-left">
            <div className="fdb-box">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_1.svg"
              />

              <div className="content">
                <h3>
                  <strong>Sara Doe</strong>
                </h3>
                <p>Founder</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 text-left">
            <div className="fdb-box">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_2.svg"
              />

              <div className="content">
                <h3>
                  <strong>Sara Doe</strong>
                </h3>
                <p>Founder</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 text-left">
            <div className="fdb-box">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_3.svg"
              />

              <div className="content">
                <h3>
                  <strong>Sara Doe</strong>
                </h3>
                <p>Founder</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 text-left">
            <div className="fdb-box">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_4.svg"
              />

              <div className="content">
                <h3>
                  <strong>Sara Doe</strong>
                </h3>
                <p>Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
