import React from 'react';
import donsimo from '../../assets/images/donsimo.jpg';
import dongiu from '../../assets/images/dongiu.jpg';
import { LinkToAnchor } from '../../utils';
import { Hover } from 'react-powerplug';

export default function Hero() {
  return (
    <Hover>
      {({ isHover, bindHover }) => (
        <section className="fdb-block pb-md-0">
          <div className="container">
            <div className="row justify-content-center pb-xl-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <h3>
                  <strong>Domande frequenti</strong>
                </h3>
                {isHover && (
                  <div className="row">
                    <figure className="col-lg-6">
                      <img src={dongiu} className="img-fluid mt-3" />
                    </figure>
                    <figure className="col-lg-6">
                      <img src={donsimo} className="img-fluid mt-3" />
                    </figure>
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <h3>
                  <strong>Dove confermo la partecipazione?</strong>
                </h3>
                <p>
                  Puoi completare il{' '}
                  <LinkToAnchor to="rsvp" smooth>
                    form qui sotto
                  </LinkToAnchor>.
                </p>
                <h3 className="mt-4 mt-xl-5">
                  <strong>Dove (e quando) si svolge la cerimonia?</strong>
                </h3>
                <p>
                  La cerimonia si svolge nella Chiesa di SS. Pietro e Paolo a
                  Trescore Balneario (BG). La chiesa parrocchiale, quella grossa
                  per intenderci, in via Locatelli 102 (<a
                    href="https://www.google.it/maps/dir/''/Parrocchia+Di+S.Pietro+Apostolo,+Via+Antonio+Locatelli,+102,+24069+Trescore+Balneario+BG/@45.6928487,9.7733059,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47815c144087229f:0x1b018783ce9b151c!2m2!1d9.8433457!2d45.6928701"
                    target="_blank"
                  >
                    indicazioni stradali
                  </a>).<br />
                  <br />
                  <b>La cerimonia inizia alle 11:00</b>, Alice permettendo.
                </p>

                <h3 className="mt-4 mt-xl-5">
                  <strong>Chi vi sposa?</strong>
                </h3>
                <p>
                  <div {...bindHover}>
                    I nostri cari amici don Giuliano Simoncelli e don Simone
                    Pecis (purtroppo i migliori erano occupati per questa data),
                  </div>
                </p>
                <h3 className="mt-4 mt-xl-5">
                  <strong>
                    Chi <u>si</u> sposa?
                  </strong>
                </h3>
                <p>
                  Ciao, se non ci conosci noi siamo Alice e Andrea, sei qui per
                  caso vieni a trovarci (ma ricordati l'IBAN)
                </p>
                <h3 className="mt-4 mt-xl-5">
                  <strong>Dove si mangia?</strong>
                </h3>
                <p>
                  Dopo la cerimonia abbiamo il piacere di invitarvi al nostro
                  ricevimento presso la bellissima{' '}
                  <a href="http://www.villafassati-barba.com/" target="_blank">
                    Villa Fassati Barba
                  </a>{' '}
                  a Ospitaletto (BS). Da Trescore è circa una mezz'oretta di
                  strada. Per non perdersi meglio controllare le{' '}
                  <a
                    href="https://www.google.it/maps/dir/Via+Antonio+Locatelli,+102,+24069+Trescore+Balneario,+BG/Villa+Fassati+Barba,+Via+Castello,+11,+25050+Passirano+BS/@45.6288855,9.8327834,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47815c1407730489:0x7d1aba036750299c!2m2!1d9.8427321!2d45.6933353!1m5!1m1!1s0x47816fec097705ad:0x818ec67a337b240a!2m2!1d10.0584285!2d45.599424"
                    target="_blank"
                  >
                    indicazioni stradali
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Hover>
  );
}
