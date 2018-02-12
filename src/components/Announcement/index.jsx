import React from 'react';
import header from '../../assets/images/header.jpg';

export default function Hero() {
  return (
    <section className="fdb-block">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-h2 text-center mb-5">
              <i>Noi ci si sposa, voi che fate?</i>
            </p>
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <div className="card-deck">
                  <div className="card border-0 text-center">
                    <h1 className="mb-0">12</h1>
                    <h2 className="mt-0 text-h4 text-uppercase text-muted">
                      Dodici
                    </h2>
                    <hr />
                    Chiesa Parrocchiale Trescore Balneario
                  </div>
                  <div className="card border-0 text-center">
                    <h1 className="mb-0">05</h1>
                    <h2 className="mt-0 text-h4 text-uppercase text-muted">
                      Maggio
                    </h2>
                    <hr />
                    11.00<br />
                    Cerimonia
                  </div>
                  <div className="card border-0 text-center">
                    <h1 className="mb-0">18</h1>
                    <h2 className="mt-0 text-h4 text-uppercase text-muted">
                      2018
                    </h2>
                    <hr />
                    18.00<br />
                    Torta & Open bar
                  </div>
                </div>
              </div>
            </div>
            <p style={{ columnCount: 3 }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place far far away. Far far away, behind the word mountains, far
              from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of
              the Semantics, a large language ocean. A small river named Duden
              flows by their place far far away. Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small
              river named Duden flows by their place far far away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
