import Script from "next/script";

export default function Carousel() {
  return (
    <>
      <section className='Owl-carousel' id='Owl-carousel'>
        <div className='container-fluid text-center my-3 carousel'>
          <h2 className='text-center our-values-title'>Our Values</h2>
          <div className='row mx-auto my-auto our-pride'>
            <h4 className='pride'>
              We pride ourselves on the following values:
            </h4>
            <div className='row'>
              <a
                className='bg w-aut prev'
                href='#recipeCarousel'
                role='button'
                data-bs-slide='prev'
              >
                <img src='/images/Arrow_left.png' />
              </a>
              <a
                className='bg w-aut next'
                href='#recipeCarousel'
                role='button'
                data-bs-slide='next'
              >
                <img src='/images/Arrow_right.png' />
              </a>
            </div>
            <div
              id='recipeCarousel'
              className='carousel-slide carousel slide '
              data-bs-ride='carousel'
            >
              <div className='carousel-inner' role='listbox'>
                <div className='carousel-item active'>
                  <div className='col-md-4 carousel-type'>
                    <div className='owl-carousel owl-theme'>
                      <div className='card'>
                        <div className='card-img'>
                          <img
                            src='/images/card-innovation.svg'
                            className='img-fluid'
                          />
                          <div className='card-body'>
                            <h3 className='card-title'>Transparent</h3>
                            <p className='card-text'>
                              From the initial sourcing of candidates for your
                              business or finding jobs that align with
                              yourrequirements, we regularly update you on our
                              progress.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='col-md-4 carousel-type'>
                    <div className='owl-carousel owl-theme'>
                      <div className='card '>
                        <div className='card-img'>
                          <img
                            src='/images/card-trust.svg'
                            className='img-fluid'
                          />
                          <div className='card-body'>
                            <h3 className='card-title'>Sincere</h3>
                            <p className='card-text'>
                              Everything we do revolves around our empathy for
                              our candidates, clients, and staff. Through
                              consistentcommunication, we always maintain the
                              utmost respect.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='col-md-4 carousel-type'>
                    <div className='owl-carousel owl-theme'>
                      <div className='card'>
                        <div className='card-img'>
                          <img
                            src='/images/card-support.svg'
                            className='img-fluid'
                          />
                          <div className='card-body'>
                            <h3 className='card-title'>Innovative</h3>
                            <p className='card-text'>
                              We're always staying on top of the latest industry
                              trends by undergoing training and fine tuning
                              ouroperations, systems, and recruitment
                              strategies, to ensure you reap results in your
                              career or business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='col-md-4 carousel-type'>
                    <div className='owl-carousel owl-theme'>
                      <div className='card'>
                        <div className='card-img'>
                          <img
                            src='/images/card-diversity.svg'
                            className='img-fluid'
                          />
                          <div className='card-body'>
                            <h3 className='card-title'>Inclusive</h3>
                            <p className='card-text'>
                              We treat you as a human first, never
                              discriminating based on your background or
                              experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='col-md-4 carousel-type'>
                    <div className='owl-carousel owl-theme'>
                      <div className='card'>
                        <div className='card-img'>
                          <img
                            src='/images/card-integrity.svg'
                            className='img-fluid'
                          />
                          <div className='card-body'>
                            <h3 className='card-title'>Driven</h3>
                            <p className='card-text'>
                              We never settle for average; we're always seeking
                              ways to raise the standards of staffing solutions
                              and provide training for entry level positions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='col-md-4 carousel-type'>
                    <div className='owl-carousel owl-theme'>
                      <div className='card'>
                        <div className='card-img'>
                          <img
                            src='/images/card-impact.svg'
                            className='img-fluid'
                          />
                          <div className='card-body'>
                            <h3 className='card-title'>Supportive</h3>
                            <p className='card-text'>
                              Whether you have an inquiry or application, or
                              searching for a candidate or position, we always
                              support your decision through a phone call or
                              email.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          type='text/javascript'
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
        ></script>
        <script type='text/javascript' src='#'></script>
        <script type='text/javascript' src='#'></script>
        <script type='text/javascript' src='#'></script>
        <Script type='text/javascript'>
          {`{let items = document.querySelectorAll(".carousel .carousel-item");

      items.forEach((el) => {
        const minPerSlide = 4;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
          if (!next) {
            // wrap carousel by using first child
            next = items[0];
          }
          let cloneChild = next.cloneNode(true);
          el.appendChild(cloneChild.children[0]);
          next = next.nextElementSibling;
        }
      });}`}
        </Script>
        {/* <Script type='text/javascript'>
        {`let myLink = document.querySelector('a[href="#"]');
      myLink.addEventListener("click", function (e) {
        e.preventDefault();
      });`}
      </Script> */}
      </section>
    </>
  );
}
