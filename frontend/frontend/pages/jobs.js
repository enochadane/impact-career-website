import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

export default function Home({ posts, name }) {
  return (
    <div>
      <Head>
        <title>Jobs</title>
      </Head>
      <div className='Banner jobs-banner'>
        <div className='container-fluid'>
          <div className='row m-0'>
            <div>
              <h1>Trending Jobs</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className='trending-jobs'>
          <div className='product-designer'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Senior Product Designer
                            </h5>
                            <p className='card-text'>
                              Daniels Inc Abuja, Nigeria$ 56,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>UX/UI Designer</h5>
                            <p className='card-text'>
                              RemaxLagos, Nigeria$ 65,000 - $ 80,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/orange-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Full-stack Developer
                            </h5>
                            <p className='card-text'>
                              DuraplastAccra, Ghana$ 45,000 - $ 60,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            src='/images/orange-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Full-stack Developer
                            </h5>
                            <p className='card-text'>
                              DuraplastAccra, Ghana$ 45,000 - $ 60,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Senior Product Designer
                            </h5>
                            <p className='card-text'>
                              Daniels Inc Abuja, Nigeria$ 56,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>UX/UI Designer</h5>
                            <p className='card-text'>
                              RemaxLagos, Nigeria$ 65,000 - $ 80,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/orange-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Full-stack Developer
                            </h5>
                            <p className='card-text'>
                              DuraplastAccra, Ghana$ 45,000 - $ 60,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/orange-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Full-stack Developer
                            </h5>
                            <p className='card-text'>
                              DuraplastAccra, Ghana$ 45,000 - $ 60,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Senior Product Designer
                            </h5>
                            <p className='card-text'>
                              Daniels Inc Abuja, Nigeria$ 56,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>UX/UI Designer</h5>
                            <p className='card-text'>
                              RemaxLagos, Nigeria$ 65,000 - $ 80,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/orange-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Full-stack Developer
                            </h5>
                            <p className='card-text'>
                              DuraplastAccra, Ghana$ 45,000 - $ 60,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/orange-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Full-stack Developer
                            </h5>
                            <p className='card-text'>
                              DuraplastAccra, Ghana$ 45,000 - $ 60,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>
                              Senior Product Designer
                            </h5>
                            <p className='card-text'>
                              Daniels Inc Abuja, Nigeria$ 56,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='card col-12 candidates'>
                    <a className='cardLInk' href='./page.html'>
                      <div className='row g-1'>
                        <div className='col-md-4 col-4'>
                          <Image
                            className='imgrounded-start'
                            src='/images/blue-img.jpeg'
                            width={117}
                            height={120}
                          ></Image>
                        </div>
                        <div className='col-md-8 col-8'>
                          <div className='card-body senior-product'>
                            <h5 className='card-title mt-3'>UX/UI Designer</h5>
                            <p className='card-text'>
                              RemaxLagos, Nigeria$ 65,000 - $ 80,000
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='faq'>
          <div className='container col-sm-8'>
            <div className='row acc-faq'>
              <div className='col-md-12'>
                <h3 className='mt-5 mb-5 text-center faqH3'>
                  Job Search Frequently Asked Questions
                </h3>
                <div className='accordion' id='accordionSection'>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                      >
                        How do I Use Impact Services as a job seeker?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseOne'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        Send us your resume or contact the team to schedule a
                        time for you to come in and fill out an application in
                        person.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                      >
                        How much does Impact Careers charge job seekers?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseTwo'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        We offer free services to you. Fees and money are
                        usually sorted with our partners.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                      >
                        Does Impact Career take a cut from my salary once I get
                        a job?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseThree'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        As we earlier pointed out, we offer free services to job
                        seekers. We add a service fee to the required fair pay
                        rate that the firm pays.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                      >
                        How soon can I start working?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseFour'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        Each job has a different start date for when you may
                        begin working after your interview with Impact Staffing.
                        We will work as hard as we can to get you a job as soon
                        as possible. You might have to start immediately or wait
                        a few weeks for the interview and hiring procedure.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                      >
                        Is it possible for me to turn down job offers on Impact
                        Career?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseFive'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        We know that some jobs can be lower than your
                        expectations. You have the right to reject an offer if
                        you are not interested. Be assured that we will continue
                        to provide you with openings based on your
                        qualifications and interests as they become available.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSix'
                      >
                        If I keep rejecting offers, will you still inform me
                        about available roles?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseSix'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        We will reach out to you to fully grasp your objectives
                        and prior work experience. Also, we will work with you
                        to establish appropriate job-seeking expectations.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSix'
                      >
                        Do you offer coaching and interview tips and preps?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseSix'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body'>
                        Yes, we do. At Impact Career, we will prepare you for
                        the best possible chance to succeed. When it comes to
                        interviews, we know that even the most qualified
                        individuals may not be the greatest at answering
                        questions. Hence, we will guide you on how to ace your
                        next interview.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
