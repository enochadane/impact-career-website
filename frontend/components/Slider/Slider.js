import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
let productsp = [
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'TRANSPARENT',
    src: '/images/card-innovation.svg',
    price:
      'From the initial sourcing of candidates for your business or finding jobs that align with yourrequirements, we regularly update you on our progress.',
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'SINCERE',
    src: '/images/card-trust.svg',

    price:
      'Everything we do revolves around our empathy for our candidates, clients, and staff. Through consistentcommunication, we always maintain the utmost respect.',
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'INNOVATIVE',
    src: '/images/card-support.svg',

    price:
      "We're always staying on top of the latest industry trends by undergoing training and fine tuning ouroperations, systems, and recruitment strategies, to ensure you reap results in your career or business.",
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'INCLUSIVE',
    src: '/images/card-diversity.svg',
    price:
      'We treat you as a human first, never discriminating based on your background or experience.',
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'DRIVEN',
    src: '/images/card-integrity.svg',
    price:
      " We never settle for average; we're always seeking ways to raise the standards of staffing solutions and provide training for entry level positions.",
  },
  {
    id: 1,
    name: 'Product Number 1',
    brand: 'SUPPORTIVE',
    src: '/images/card-impact.svg',
    price:
      'Whether you have an inquiry or application, or searching for a candidate or position, we always support your decision through a phone call or email.',
  },
];
var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ['owl-prev', 'owl-next'],
    navText: [
      '<Image className="color-back" src=/images/Arrow_right.png />',
      '<Image className="color-back"src=/images/Arrow_left.png />',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className=" row no-gutters">
        <div
          className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2"
          id="owl-carousel-products"
        >
          <ul
            id="owl-carousel-ul"
            className=" owl-carousel owl-loaded owl-drag"
          >
            <h3 className="text-center">
              <span className="heading float-left w-100 mb-5">Our Values</span>
            </h3>
            <h4 className="pride mb-5">
              We pride ourselves on the following values:{' '}
            </h4>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={4}
              nav={true}
              navText={[
                '<Image src=/images/Arrow_left.png/>',
                '<Image src=/images/Arrow_right.png />',
              ]}
              dots={false}
              animateIn={true}
              {...options}
            >
              {productsp && productsp.length > 0
                ? productsp.map((product) => {
                    return (
                      <>
                        <div
                          id="featuredProducts"
                          className="card border-0 item float-left w-100"
                          key={product.name}
                        >
                          <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                            <a className="product float-left">
                              <span className="image text-center">
                                {/* <img
                                id={"img" + product.id}
                                src='/images/card-innovation.svg'
                                alt={product.name}
                                title={product.name}
                              /> */}
                                <Image
                                  className="d-block w-100 mt-n3"
                                  alt="First slide"
                                  src={product.src}
                                  width={5}
                                  height={5}
                                ></Image>
                              </span>
                              <span className="w-100 text-left mt-1">
                                <h5 className="brand text-capitalize float-left">
                                  {product.brand}
                                </h5>
                                <strong className="name itemPrice text-left mt-5">
                                  {product.price}
                                </strong>
                              </span>
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })
                : ''}
            </OwlCarousel>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Slider;
