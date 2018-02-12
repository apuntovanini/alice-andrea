import React from 'react';
import { Form, FormSubmit } from '@uidu/forms';
import { Input, Select } from '@uidu/inputs';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Hero() {
  const handleSubmit = model => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...model }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    // e.preventDefault();
  };

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
            <Form
              name="contact"
              handleSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              footerRenderer={({ canSubmit }) => (
                <FormSubmit
                  canSubmit={canSubmit}
                  className="btn btn-block"
                  labeL="Invia"
                />
              )}
            >
              <Input type="hidden" name="form-name" value="contact" />
              <Input
                name="name"
                placeholder="Pinco pallino"
                label="Il tuo nome"
              />
              <Input
                name="email"
                type="email"
                placeholder="info@12052018.it"
                label="Lasciaci una mail"
              />
              <Select
                name="rsvp"
                options={[
                  { id: 1, name: <p>Certooone</p> },
                  { id: 2, name: <p>No</p> },
                ]}
                label="Sarai dei nostri?"
                exposed
              />
              <Select
                name="dietary"
                options={[
                  { id: 1, name: <p>Certooone</p> },
                  { id: 2, name: <p>No</p> },
                ]}
                label="Sarai dei nostri?"
                exposed
              />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
