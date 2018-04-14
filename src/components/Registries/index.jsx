import React, { Component } from 'react';
import ClipboardJs from 'clipboard';
import swal from 'sweetalert';

import './index.scss';

import tibet from '../../assets/images/tibet.jpg';
import amazon from '../../assets/images/amazon.jpg';
import busta from '../../assets/images/busta.jpg';

export default class Registries extends Component {
  componentDidMount() {
    const clipboard = new ClipboardJs(this.iban, {
      text: trigger => {
        return 'IT55X0301503200000003617969';
      },
    });
  }

  wantedGift = e => {
    e.preventDefault();
    swal(
      'Yeah!',
      "Hai fatto la scelta giusta! Ora puoi incollare l'IBAN IT55X0301503200000003617969 nel tuo homebanking perchè sei una persona moderna, e inviare un bonifico perchè sei una persona buona ;)",
      'success',
    );
  };

  unwantedGift = e => {
    e.preventDefault();
    swal(
      'Ooops!',
      "Forse intendevi cliccare sulla busta! :) ad ogni modo questo è l'IBAN per contribuire alla nostra festa: IT55X0301503200000003617969",
      'error',
    );
  };

  render() {
    return (
      <section className="fdb-block team-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-5 mb-3 mb-lg-0">
              <h3>
                <strong>Se volete contribuire alla festa</strong>
              </h3>
            </div>
            <div className="col-lg-6 col-xl-7 text-lg-right">
              <p className="text-h3 mt-0">
                Vi lasciamo un paio di opzioni con libertà,{' '}
                <span className="text-danger">diciamo no ai vasi Ming</span>
              </p>
            </div>
          </div>

          <div className="row-50" />

          <div className="row gifts">
            <div className="col-md-4 text-left mb-4 mb-md-0">
              <a
                href="#"
                onClick={this.unwantedGift}
                className="fdb-box unwanted-gift d-block"
              >
                <img
                  alt="Alice & Andrea, lista viaggio"
                  className="w-100"
                  src={tibet}
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
              </a>
            </div>
            <div className="col-md-4 text-left mb-4 mb-md-0">
              <a
                ref={c => {
                  this.iban = c;
                }}
                href="#"
                onClick={this.wantedGift}
                className="fdb-box wanted-gift d-block"
              >
                <img alt="image" className="w-100" src={busta} />
                <div className="content">
                  <h3>
                    <strong>La bbusta!</strong>
                  </h3>
                  <p>Per tutto il resto c'è Mastercard.</p>
                  <p>Causale: Alice e Andrea - 12.05.2018</p>
                  <p>IBAN: IT55X0301503200000003617969</p>
                  <button className="btn btn-primary btn-block">
                    Salva l'IBAN
                  </button>
                </div>
              </a>
            </div>
            <div className="col-md-4 text-left mb-4 mb-md-0">
              <a
                href="#"
                onClick={this.unwantedGift}
                className="fdb-box unwanted-gift d-block"
              >
                <img alt="image" className="w-100" src={amazon} />

                <div className="content">
                  <h3>
                    <strong>Lista nozze</strong>
                  </h3>
                  <p>
                    Abbiamo una lista Amazon se volete darci una mano a
                    completare la nostra casa.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
