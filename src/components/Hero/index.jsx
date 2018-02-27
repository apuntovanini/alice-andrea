import React from 'react';
import header from '../../assets/images/header.jpg';
import header2 from '../../assets/images/header2.jpg';
import header3 from '../../assets/images/header3.jpg';

const items = [
  {
    src: header,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: header2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: header3,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

export default class Hero extends React.Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            {items.map((item, index) => (
              <div
                className={`carousel-item${index === 0 ? ' active' : ''}`}
                key={item.src}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%',
                  minHeight: '80vh',
                }}
              />
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container mt-3 text-center">
          <p className="mb-0 text-uppercase text-muted">
            12 May 2018 - Trescore B.rio
          </p>
        </div>
      </div>
    );
  }
}
