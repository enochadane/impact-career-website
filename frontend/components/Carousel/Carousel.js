import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <div className='carousel'>
          <div className='container'>
            <div className='row mx-auto my-auto our-pride'>
              <h2 className='text-center our-values-title mt-5 mb-5'>
                Our Values
              </h2>
              <h4 className='pride'>
                We pride ourselves on the following values:
              </h4>
              <div>
                <img
                  src='/images/Arrow_right.png'
                  style={{
                    backgroundColor: "#166433",
                    padding: "10px 10px",
                    borderRadius: "8px",
                    float: "right",
                    marginRight: "50px",
                  }}
                  onClick={this.next}
                />
                <img
                  src='/images/Arrow_left.png'
                  style={{
                    backgroundColor: "#166433",
                    padding: "10px 10px",
                    borderRadius: "8px",
                    float: "right",
                    marginRight: "30px",
                  }}
                  onClick={this.previous}
                />
              </div>
            </div>
            <Slider ref={(slider) => (this.slider = slider)} {...settings}>
              <div>
                <div className='card outer-card'>
                  <img
                    src='/images/card-innovation.svg'
                    className='img-fluid'
                    width='50px'
                    height='10px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>Transparent</h4>
                    <p className='card-text'>
                      From the initial sourcing of candidates for your business
                      or finding jobs that align with yourrequirements, we
                      regularly update you on our progress.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='card outer-card'>
                  <img
                    src='/images/card-trust.svg'
                    className='img-fluid'
                    width='50px'
                    height='10px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>Sincere</h4>
                    <p className='card-text'>
                      Everything we do revolves around our empathy for our
                      candidates, clients, and staff. Through
                      consistentcommunication, we always maintain the utmost
                      respect.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='card outer-card'>
                  <img
                    src='/images/card-support.svg'
                    className='img-fluid'
                    width='50px'
                    height='10px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>Innovative</h4>
                    <p className='card-text'>
                      We're always staying on top of the latest industry trends
                      by undergoing training and fine tuning ouroperations,
                      systems, and recruitment strategies, to ensure you reap
                      results in your career or business.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='card outer-card'>
                  <img
                    src='/images/card-diversity.svg'
                    className='img-fluid'
                    width='50px'
                    height='10px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>Inclusive</h4>
                    <p className='card-text'>
                      We treat you as a human first, never discriminating based
                      on your background or experience.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='card outer-card'>
                  <img
                    src='/images/card-integrity.svg'
                    className='img-fluid'
                    width='50px'
                    height='10px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>Driven</h4>
                    <p className='card-text'>
                      We never settle for average; we're always seeking ways to
                      raise the standards of staffing solutions and provide
                      training for entry level positions.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='card outer-card'>
                  <img
                    src='/images/card-impact.svg'
                    className='img-fluid'
                    width='50px'
                    height='10px'
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>Supportive</h4>
                    <p className='card-text'>
                      Whether you have an inquiry or application, or searching
                      for a candidate or position, we always support your
                      decision through a phone call or email.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
