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
                <div className="col mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <input
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
              <div className="row justify-content-start">
                <div className="col">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      I Read and Accept{' '}
                      <a href="https://www.froala.com">Terms and Conditions</a>
                    </label>
                  </div>

                  <button className="btn mt-4">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
