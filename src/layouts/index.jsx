import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Element } from 'react-scroll';
import 'bootstrap';

import {
  Header,
  Hero,
  Supporters,
  Announcement,
  Faq,
  Rsvp,
  Registries,
  Location,
  Footer,
} from '../components';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Alice & Andrea \\ 12_05_2018"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Hero />
    <Element name="announcement">
      <Announcement />
    </Element>
    <Element name="faq">
      <Faq />
    </Element>
    <Element name="rsvp">
      <Rsvp />
    </Element>
    <Element name="registries">
      <Registries />
    </Element>
    <Element name="location">
      <Location />
    </Element>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
