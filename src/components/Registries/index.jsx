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

    clipboard.on('success', e => {
      swal(
        'Yeah!',
        'Ora puoi incollarlo nel tuo homebanking perchè sei una persona moderna, e inviare un bonifico perchè sei una persona buona',
        'success',
      );

      e.clearSelection();
    });
  }

  render() {
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
            <div className="col-sm-4 text-left mb-4 mb-md-0">
              <div className="fdb-box unwanted-gift">
                <img
                  alt="Alice & Andrea, lista viaggio"
                  className="img-fluid"
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
              </div>
            </div>
            <div className="col-sm-4 text-left mb-4 mb-md-0">
              <div className="fdb-box wanted-gift">
                <img alt="image" className="img-fluid" src={busta} />
                <div className="content">
                  <h3>
                    <strong>La bbusta!</strong>
                  </h3>
                  <p>Per tutto il resto c'è Mastercard.</p>
                  <p>Causale: Alice e Andrea - 12.05.2018</p>
                  <p>IBAN: IT55X0301503200000003617969</p>
                  <button
                    ref={c => {
                      this.iban = c;
                    }}
                    className="btn btn-primary btn-block"
                  >
                    Salva l'IBAN
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-left mb-4 mb-md-0">
              <div className="fdb-box unwanted-gift">
                <img alt="image" className="img-fluid" src={amazon} />

                <div className="content">
                  <h3>
                    <strong>Lista nozze</strong>
                  </h3>
                  <p>
                    Abbiamo una lista Amazon se volete darci una mano a
                    completare la nostra casa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
