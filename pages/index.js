import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Home({}) {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos) => setPosition(newPos),
      console.error
    );
  }, []);
  return (
    <div>
      <div
        id='demo'
        className='carousel slide carouselSlide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner carouselInner'>
          <div className='carousel-item active'>
            <Image
              className='d-block slide-clr'
              alt='Los Angeles'
              src='/images/bannerImages/homeBanner1.jpg'
              width={1400}
              height={500}
            ></Image>
            <div className='carousel-caption'>
              <h1>Stretch your search for tech talent</h1>
              <p>
                Our extensive and ever growing database of professionals saves
                your HR the stress of heading hunting for specific skill sets in
                Florida.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <Image
              className='d-block slide-clr'
              alt='Chicago'
              src='/images/bannerImages/homeBanner2.jpg'
              width={1400}
              height={500}
            ></Image>
            <div className='carousel-caption'>
              <h1>Commence your career with confidence</h1>
              <p>
                Whether you’re looking for a new position or want to access the
                tech field, our training resources can upskill you or help with
                an entry position.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <Image
              className='d-block slide-clr'
              alt='Los Angeles'
              src='/images/bannerImages/homeBanner1.jpg'
              width={1400}
              height={500}
            ></Image>
            <div className='carousel-caption'>
              <h1>Staffing solutions streamlined</h1>
              <p>
                Secure excellence and high performance for your business with
                us. We listen to your requirements, implement our expertise and
                undergo screenings, interviews, and tests.
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <Image
              className='d-block slide-clr'
              alt='Chicago'
              src='/images/bannerImages/homeBanner2.jpg'
              width={1400}
              height={500}
            ></Image>
            <div className='carousel-caption'>
              <h1>Empowering professionals and organizations</h1>
              <p>
                Finding recruits for businesses and connecting professionals to
                jobs is not our core goal. We endeavor to empower the lives of
                locals inside and outside the workplace around us.
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev slick-slide'
          type='button'
          data-bs-target='#demo'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon'></span>
        </button>
        <button
          className='carousel-control-next slick-slide'
          type='button'
          data-bs-target='#demo'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon'></span>
        </button>
      </div>

      <section className='Job'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-12'>
              <div className='card col-12 candidate-card'>
                <div className='row g-1'>
                  <div className='col-md-8 col-12'>
                    <div className='card-body Job-Seeker'>
                      <h5 className='card-title'>Looking for employment?</h5>
                      <p className='card-text'>
                        The first step to entering an exciting new career is to
                        share your resume with us! If we find you meet our
                        talent expectations, we’ll invite you for an interview
                        to learn more and assist with your work search.
                      </p>
                      <button
                        onClick={() => setModal(true)}
                        id='myBtn'
                        class='btn btn-outline-success sub-btn'
                      >
                        Submit your Resume
                      </button>
                    </div>
                  </div>
                  <div className='col-md-4 col-12 icon'>
                    <Image
                      className='img-fluid rounded-start'
                      alt='JobSeeker'
                      src='/images/JobSeeker green.png'
                      width={150}
                      height={200}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='card col-12 candidate-card'>
                <div className='row g-1'>
                  <div className='col-md-8'>
                    <div className='card-body Job-Seeker'>
                      <h5 className='card-title'>Connect with candidates</h5>
                      <p className='card-text'>
                        Utilize our extensive and experienced database of
                        skilled screened talent suited to help build teams and
                        organizations. Our 60 years in recruitment and tech,
                        allows us to find people who fit into your business
                        culture.
                      </p>
                      <button
                        onClick={() => setModal(true)}
                        id='myBtn1'
                        class='btn btn-outline-success sub-btn'
                      >
                        Search for candidates
                      </button>
                    </div>
                  </div>
                  <div class='col-md-4 col-12 icon'>
                    <Image
                      className='img-fluid rounded-start'
                      alt='employeeseeker'
                      src='/images/EmployerSeekingCandidatesGradient.png'
                      width={150}
                      height={200}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-6 col-md-12'>
              <div className='card col-12 Learn'>
                <div className='row g-1'>
                  <div className='col-md-7 col-12'>
                    <div className='card-body p-0'>
                      <h5 className='card-title text-white'>
                        Resources to raise your chances
                      </h5>
                      <p class='text-white'>
                        Upskill yourself and gain a greater advantage for future
                        job applications. Our specific training resources can
                        help you learn more and provide you with higher chances
                        of landing roles.
                      </p>
                      <button
                        onClick={() => setModal(true)}
                        id='myBtn2'
                        class='btn btn-outline-white access-btn'
                      >
                        Request access
                      </button>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-5 icon learnIcon'>
                    <Image
                      src='/images/learn.png'
                      width={300}
                      height={100}
                      className='img-fluid rounded-start'
                      alt='learn'
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='card col-12 last-card'>
                <div className='row g-1'>
                  <div className='col-md-12'>
                    <div className='card-body sign-up'>
                      <h5 className='card-title text-white'>
                        Be the first to know
                      </h5>
                      <p className='card-text text-white'>
                        Gain updates first on incoming job roles that become
                        available to us. Receive unique tips and tricks to
                        assist with your search.
                      </p>
                      <div className='email'>
                        <div className='form-group'>
                          <input
                            type='email'
                            className='text-field'
                            maxlength='256'
                            name='email'
                            data-name='Email'
                            placeholder='Your email address......'
                          />
                        </div>
                      </div>
                      <div className='form-group'>
                        <a
                          href='#'
                          className='btn btn-outline-success signup-btn'
                        >
                          Subscribe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='myModal'
          className='modal'
          style={{ display: modal ? "block" : "none" }}
        >
          <div className='modal-content'>
            <span className='close' onClick={() => setModal(false)}>
              &times;
            </span>
            <section id='contact-form'>
              <div className='container'>
                <div className='get-in-touch'>
                  <h2>Apply for this Job</h2>
                  <p>
                    Please fill the details below to evaluate your candidature
                  </p>
                </div>
                <form className='needs-validation' method='post'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        className='form-control'
                        id='firstName'
                        placeholder='First-Name'
                        value=''
                        required
                      />
                      <div className='invalid-feedback'>
                        Valid first name is required.
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        className='form-control'
                        id='lastName'
                        placeholder='Last-Name'
                        value=''
                        required
                      />
                      <div className='invalid-feedback'>
                        Valid last name is required.
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        value=''
                        required
                      />
                      <div className='invalid-feedback'>
                        Valid email address is required.
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='tel'
                        className='form-control'
                        id='Phone'
                        placeholder='Mobile number'
                        value=''
                        required
                      />
                      <div className='invalid-feedback'>
                        Valid phone number is required.
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div class='col-sm-6'>
                      <input
                        type='text'
                        className='form-control'
                        id='Position Location'
                        placeholder='Your Location'
                        value=''
                        required
                      />

                      <div className='invalid-feedback'>
                        Please enter position location .
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        className='form-control'
                        id='Current-Salary'
                        placeholder='Current-Salary'
                        value=''
                        required
                      />
                      <div className='invalid-feedback'>
                        Please enter Title of Position.
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div>
                        <input
                          type='text'
                          className='form-control'
                          id='Notice period'
                          placeholder='Notice period'
                          value=''
                          required
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          id='Linked in URL'
                          placeholder='LinkedIn URL'
                          value=''
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div>
                        <input
                          type='file'
                          className='w-file-upload-input form-control'
                          accept='.pdf, .doc, .docx, .txt'
                          name='Resume-Upload'
                          data-iconName='fa-solid fa-cloud-arrow-up'
                          data-name='Upload Job Description, If Available'
                          aria-hidden='true'
                          id='Resume-Upload'
                          aria-placeholder=' Upload Job Description, If Available'
                          tabindex='-1'
                          required=''
                        />
                        <p className='text-center'>
                          Accepted formats : PDF, DOC, DOCX, TXT (Max file size
                          10MB)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group text-center'>
                    <input
                      type='submit'
                      value='Submit'
                      data-wait='Please wait...'
                      className='site-btn'
                    />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div>
        <section className='trending-jobs mt-5'>
          <div className='row trendingRow'>
            <div className='col'>
              <h3 className='trendingH3'>Trending Jobs</h3>
            </div>
            <div className='col viewallCol'>
              <a className='atag' href='./jobs.html'>
                <p className='viewallPara'>
                  View all jobs
                  <span>
                    {/* <img src='./assets/images/arrow.svg' alt='' /> */}
                  </span>
                </p>
              </a>
            </div>
          </div>
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
                            src='/images/blueCircle.jpg'
                            width={100}
                            height={100}
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
                            src='/images/blueCircle.jpg'
                            width={100}
                            height={100}
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
                            src='/images/orange_img.jpg'
                            width={100}
                            height={100}
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
                            src='/images/orange_img.jpg'
                            width={100}
                            height={100}
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
                            src='/images/blueCircle.jpg'
                            width={100}
                            height={100}
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
                            src='/images/blueCircle.jpg'
                            width={100}
                            height={100}
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
      </div>
      <div>
        <section className='faq'>
          <div className='container col-sm-8'>
            <div className='row acc-faq'>
              <div className='col-md-12'>
                <h1 className='mt-5 mb-5 text-center faqHeading'>
                  Employers Frequently Asked Questions
                </h1>
                <div className='accordion' id='accordionSection'>
                  <div className='accordion-item mb-3'>
                    <h2 className='accordion-header'>
                      <button
                        type='button'
                        className='accordion-button collapsed'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                      >
                        How fast can you fill up a position?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseOne'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body pt-0'>
                        We always deliver based on your deadlines required. We
                        listen to your needs, streamline our process and find
                        you skilled talent quickly.
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
                        What do your selection and recruitment processes entail?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseTwo'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body pt-0'>
                        Our recruitment process is extensive; it involves a
                        phone screening, skill based interviews, thorough
                        application, face to face interviews, and assessment to
                        determine the ideal job/role for the candidate.
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
                        How does Impact Careers find talent?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseThree'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body pt-0'>
                        We have a huge database consisting of information and
                        resumes of various talents holding different skill sets
                        and backgrounds. When finding talent from our database,
                        we conduct further background checks on them before
                        presenting them to you.
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
                        Does impact career offer talents for contract and part
                        time roles?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseFour'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body pt-0'>
                        Yes, Impact Careers offer talents for permanent and
                        contract and part-time roles.
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
                        How does Impact Careers know the right fit for us?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseFive'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body pt-0'>
                        Before finding the right company for you, we take the
                        time to understand your needs. Then we locate the right
                        talent for your company that aligns with your
                        requirements.
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
                        Is it compulsory that we get involved in the whole
                        recruitment process?
                      </button>
                    </h2>
                    <div
                      className='accordion-collapse collapse'
                      id='collapseSix'
                      data-bs-parent='#accordionSection'
                    >
                      <div className='accordion-body pt-0'>
                        It's not mandatory to be hands on in the entire
                        recruitment process; however, if you wish, you can do
                        it. Our main purpose is to serve you and remove any
                        excess responsibilities to allow you to focus on your
                        business.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='container homeEmployers'>
        <div>
          <h2 className='homeEmployersH2'>Employers</h2>
        </div>
        <div className='row employersRow'>
          <div className='col-md-1 bagImgCol'>
            <Image
              className='employersImg'
              alt='Bag-img'
              src='/images/EmployersBag.svg'
              width={50}
              height={50}
            ></Image>
          </div>
          <div className='col-md-3 employersContent'>
            <h6 className='employersH5'>Collaboration with clients</h6>
            <p className='employersPara'>
              Tailored solutions to find candidates that align with your
              business model and goals.
            </p>
          </div>
          <div className='col-md-1 bagImgCol'>
            <Image
              className='employersImg'
              alt='Bag-img'
              src='/images/costEffective.svg'
              width={50}
              height={50}
            ></Image>
          </div>
          <div className='col-md-3 employersContent'>
            <h6 className='employersH5'>Economical and effective</h6>
            <p className='employersPara'>
              We provide competitive pricing and free architect consultations
              that cater to your budget and stop you from being overcharged for
              advice.
            </p>
          </div>
          <div className='col-md-1 bagImgCol'>
            <Image
              className='employersImg'
              alt='Bag-img'
              src='/images/communicating.svg'
              width={50}
              height={50}
            ></Image>
          </div>
          <div className='col-md-3 employersContent'>
            <h6 className='employersH5'>Consistent with communication</h6>
            <p className='employersPara'>
              Communicate to use your concerns and requirements; we’re always
              ready to listen and solve them.
            </p>
          </div>
        </div>
        <div className='row employersRow'>
          <div className='col-md-1 bagImgCol'>
            <Image
              className='employersImg'
              alt='Bag-img'
              src='/images/homeFlexible.svg'
              width={50}
              height={50}
            ></Image>
          </div>
          <div className='col-md-3 employersContent'>
            <h6 className='employersH5'>Flexible work</h6>
            <p className='employersPara'>
              Our unmatched ecosystem of professionals allows us to provide you
              with a rich pool of tech talent when you need them.
            </p>
          </div>
          <div className='col-md-1 bagImgCol'>
            <Image
              className='employersImg'
              alt='Bag-img'
              src='/images/homeThorough.svg'
              width={50}
              height={50}
            ></Image>
          </div>
          <div className='col-md-3 employersContent'>
            <h6 className='employersH5'>Professional integrity</h6>
            <p className='employersPara'>
              Before presenting you with talent options, we do our due diligence
              by undergoing rigorous screenings and interviews.
            </p>
          </div>
          <div className='col-md-1 bagImgCol'>
            <Image
              className='employersImg'
              alt='Bag-img'
              src='/images/homeExperience.svg'
              width={50}
              height={50}
            ></Image>
          </div>
          <div className='col-md-3 employersContent'>
            <h6 className='employersH5'>Extensive experience</h6>
            <p className='employersPara'>
              With in-depth experience in recruitment and technology, we
              smoothen your process when looking for jobs or talent.
            </p>
          </div>
        </div>
      </section>
      <div>
        <section className='timeLine'>
          <div className='container'>
            <div>
              <h1 className='timelineH1'>Our Process</h1>
              <p>
                When choosing us to find candidates or a new employer for your
                job search, we help you by doing the following:
              </p>
            </div>
            <div className='main-timeline timelineMain'>
              <div className='timeline right timelineRight'>
                <div className='card cardSec'>
                  <div className='card-body p-4'>
                    <h6 className='timelineH6'>1.</h6>
                    <h5 className='timelineH5'> Understand your needs</h5>
                    <p className='timelinePara'>
                      Jump on a call with us, so we can learn about your
                      preferred job prospects and staffing needs!
                    </p>
                  </div>
                </div>
              </div>

              <div className='timeline left timelineLeft'>
                <div className='card cardSec'>
                  <div className='card-body p-4'>
                    <h6 className='timelineH6'>2.</h6>
                    <h5 className='timelineH5'>Develop a strategy</h5>
                    <p className='timelinePara'>
                      Let us prepare a customized strategy based on your
                      timeline, goals and expertise.
                    </p>
                  </div>
                </div>
              </div>
              <div className='timeline right timelineRight'>
                <div className='card cardSec'>
                  <div className='card-body p-4'>
                    <h6 className='timelineH6'>3.</h6>
                    <h5 className='timelineH5'>Deliver the results</h5>
                    <p className='timelinePara'>
                      We handle your background screenings, recruiting, testing,
                      and more to find the best professional for your business,
                      saving you the stress.
                    </p>
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
