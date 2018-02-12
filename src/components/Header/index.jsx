import React from 'react';
// import Link from 'gatsby-link';

import { Link } from 'react-scroll';

import { LinkToAnchor } from '../../utils';

const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="https://www.froala.com">
          Alice & Andrea
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav3"
          aria-controls="navbarNav3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav3">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <LinkToAnchor className="nav-link" to="announcement" smooth>
                WTF?
              </LinkToAnchor>
            </li>
            <li className="nav-item">
              <LinkToAnchor className="nav-link" to="faq" smooth>
                FAQ
              </LinkToAnchor>
            </li>
            <li className="nav-item">
              <LinkToAnchor className="nav-link" to="location" smooth>
                Location
              </LinkToAnchor>
            </li>
            <li className="nav-item">
              <LinkToAnchor className="nav-link" to="registries" smooth>
                Registries
              </LinkToAnchor>
            </li>
            <li className="nav-item">
              <LinkToAnchor className="nav-link" to="guestbook" smooth>
                Guestbook
              </LinkToAnchor>
            </li>
          </ul>
          <LinkToAnchor className="btn btn-empty ml-md-3" to="rsvp" smooth>
            RSVP
          </LinkToAnchor>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
