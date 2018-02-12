import React from 'react';
import './index.scss';

export default function Hero() {
  return (
    <section className="fdb-block team-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h3>
              <strong>Se volete contribuire alla festa</strong>
            </h3>
          </div>
          <div className="col-md-6 text-right">
            <p className="text-h3 mt-0">
              Vi lasciamo un paio di opzioni con libertà
            </p>
          </div>
        </div>

        <div className="row-50" />

        <div className="row gifts">
          <div className="col-sm-4 text-left">
            <div className="fdb-box unwanted-gift">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_2.svg"
              />

              <div className="content">
                <h3>
                  <strong>Lista viaggio</strong>
                </h3>
                <p>
                  Ce ne andremo in Tibet e in Cina, a ripercorrere le orme di
                  Harrer (o di Brad Pitt per i profani)
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-left">
            <div className="fdb-box wanted-gift">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_1.svg"
              />

              <div className="content">
                <h3>
                  <strong>La bbusta!</strong>
                </h3>
                <p>Per tutto il resto c'è Mastercard.</p>
                <p>Causale: Alice e Andrea - 12.05.2018</p>
                <p>IBAN: IT2i0301202301230</p>
                <button className="btn btn-primary btn-block">
                  Premi qui per copiare
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 text-left">
            <div className="fdb-box unwanted-gift">
              <img
                alt="image"
                className="img-fluid"
                src="./imgs/img_square_3.svg"
              />

              <div className="content">
                <h3>
                  <strong>Lista nozze</strong>
                </h3>
                <p>
                  Abbiamo una lista Amazon se volete darci una mano a completare
                  la nostra casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
