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
            <form name="contact" netlify>
              <div className="row align-items-center">
                <div className="col">
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
                  <select
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <button className="btn mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
