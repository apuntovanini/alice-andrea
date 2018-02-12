import React from 'react';

import adobe from '../../assets/images/customers/adobe.svg';
import discovery from '../../assets/images/customers/discovery.svg';
import ebay from '../../assets/images/customers/ebay.svg';
import samsung from '../../assets/images/customers/samsung.svg';
import orange from '../../assets/images/customers/orange.svg';
import salesforce from '../../assets/images/customers/salesforce.svg';

export default function Supporters() {
  return (
    <div className="container">
      <div className="row pt-5 pb-3">
        <div className="col-12 text-center">
          <p>
            <strong>Fortune 100 companies are using our products</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img
            alt="image"
            height="30"
            className="ml-3 mr-3 mb-2 mt-2"
            src={adobe}
          />
          <img
            alt="image"
            height="30"
            className="ml-3 mr-3 mb-2 mt-2"
            src={discovery}
          />
          <img
            alt="image"
            height="30"
            className="ml-3 mr-3 mb-2 mt-2 "
            src={ebay}
          />
          <img
            alt="image"
            height="30"
            className="ml-3 mr-3 mb-2 mt-2"
            src={samsung}
          />
          <img
            alt="image"
            height="30"
            className="ml-3 mr-3 mb-2 mt-2"
            src={orange}
          />
          <img
            alt="image"
            height="30"
            className="ml-3 mr-3 mb-2 mt-2"
            src={salesforce}
          />
        </div>
      </div>
    </div>
  );
}
