import React from 'react';

export default function Hero() {
  return (
    <section className="fdb-block pb-md-0">
      <div className="container">
        <div className="row justify-content-center pb-xl-5">
          <div className="col-md-6">
            <h3>
              <strong>RSVP</strong>
            </h3>
            <p className="text-muted mb-1">Répondez s’il vous plait</p>
            <p className="small">(scoperto 10 gg fa)</p>
          </div>
          <div className="col-md-6">
            <div className="row mb-4">
              <div className="col-sm-6">
                <address>
                  <strong>Alice Ghidoni</strong>
                  <br />
                  <a href="mailto:aliceghidoni91@gmail.com">
                    aliceghidoni91@gmail.com
                  </a>
                  <br />
                  <tel>+393883616571</tel>
                </address>
              </div>
              <div className="col-sm-6">
                <address>
                  <strong>Andrea Vanini</strong>
                  <br />
                  <a href="mailto:andrea.vanini@uidu.org">
                    andrea.vanini@uidu.org
                  </a>
                  <br />
                  <tel>+393803306560</tel>
                </address>
              </div>
            </div>
            <form
              method="post"
              name="rsvp-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="rsvp-form" />
              <div className="row align-items-center">
                <div className="col">
                  <label>Identificati</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Il tuo nome"
                  />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label>Indirizzo email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="La tua email"
                  />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label>Confermi la tua presenza?</label>
                  <select
                    name="confirm"
                    className="custom-select"
                    style={{ WebkitAppearance: 'none' }}
                    // defaultValue=""
                  >
                    <option value="">Seleziona...</option>
                    <option value="si">😎 &nbsp; Ci sono / siamo!</option>
                    <option value="no">
                      😭 &nbsp; Purtroppo non riesco / riusciamo
                    </option>
                  </select>
                </div>
                <div className="col">
                  <label>Hai qualche allergia/intolleranza?</label>
                  <select
                    name="allergie"
                    className="custom-select"
                    style={{ WebkitAppearance: 'none' }}
                    // defaultValue=""
                  >
                    <option value="">Seleziona...</option>
                    <option value="no">No, mangio di tutto</option>
                    <option value="celiaco">Celiaco</option>
                    <option value="lattosio">Intollerante al lattosio</option>
                    <option value="altro">Altro, mandateci una mail</option>
                  </select>
                </div>
              </div>
              <button className="btn mt-4 px-5">Invia</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
