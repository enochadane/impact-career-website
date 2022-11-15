// import Head from 'next/head';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { GET_ALL_POSTS, GET_FAQ } from '../graphql/queries';
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>

      <div className='Banner about-banner'>
        <div className='container-fluid'>
          <div className='row m-0'>
            <div>
              <h1>About Us</h1>
              <h4>
                Tying up local emerging and experienced tech talent to
                specialized firms
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* main content */}
      <div>
        <section className='container aboutMissionSec'>
          <div className='row'>
            <div className='col-sm-3 missionImgCol'>
              <Image
                className='missionImg'
                src='/images/MachineLearning.jpg'
                alt='ML-img'
                width={250}
                height={250}
              ></Image>

              <Image
                className='missionImgVertical'
                alt='ML-img'
                src='/images/MachineVertical.jpg'
                width={250}
                height={200}
              ></Image>
            </div>
            <div className='col-sm-3 missionContent'>
              <h1 className='missionH1'>Our Mission</h1>
              <p className='missionPara OurMissionPara'>
                To advance the quality of local livelihoods and businesses
                through strategic staffing solutions and placements.
              </p>
            </div>
            <div className='col-sm-3 missionImgCol'>
              <Image
                className='missionImg'
                alt='ML-img'
                src='/images/Itouch.jpg'
                width={250}
                height={250}
              ></Image>

              <Image
                className='missionImgVertical'
                alt='ML-img'
                src='/images/ItouchVertical.jpg'
                width={250}
                height={200}
              ></Image>
            </div>
            <div className='col-sm-3 missionContent'>
              <h1 className='missionH1'>Why Impact Careers?</h1>
              <p className='missionPara'>
                Whether you're looking for work or want emerging or experienced
                talent through your doors, your needs matter to us. Through top
                tier technology staffing solutions, responsive staffing,
                direct-hire, and technology executive search recruiting
                services, we help those within Florida land contracts.
              </p>
              <p>
                We're more than just numbers and connecting experts; we
                genuinely care about creating job opportunities and revenue
                streams that have lasting impacts.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* our values */}

      {/* <div>
        <section id='carousel-section'>
          <div className='container'>
            <div>
              <h1 className='text-center our-values-title'>Our Values</h1>
              <h4 className='pride'>
                We pride ourselves on the following values:
              </h4>
            </div>
            <div className='row'>
              <div className='col-12 m-auto'>
                <div className='owl-carousel owl-theme'>
                  <div className='item'>
                    <div className='card'>
                      <Image
                        className='d-block w-100'
                        alt='First slide'
                        src='/images/card-innovation.svg'
                        width={50}
                        height={20}
                      ></Image>
                      <div className='card-body'>
                        <h3 className='card-title'>Transparent</h3>
                        <p className='card-text'>
                          From the initial sourcing of candidates for your
                          business or finding jobs that align with your
                          requirements, we regularly update you on our progress.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='card'>
                      <Image
                        className='d-block w-100'
                        alt=' Second slide'
                        src='/images/card-trust.svg'
                        width={250}
                        height={200}
                      ></Image>
                      <div className='card-body'>
                        <h3 className='card-title'>Sincere</h3>
                        <p className='card-text'>
                          Everything we do revolves around our empathy for our
                          candidates, clients, and staff. Through consistent
                          communication, we always maintain the utmost respect.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='card'>
                      <Image
                        className='d-block w-100'
                        alt='Third slide'
                        src='/images/card-support.svg'
                        width={250}
                        height={200}
                      ></Image>
                      <div className='card-body'>
                        <h3 className='card-title'>Innovative</h3>
                        <p className='card-text'>
                          We're always staying on top of the latest industry
                          trends by undergoing training and fine tuning our
                          operations, systems, and recruitment strategies, to
                          ensure you reap results in your career or business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='card'>
                      <Image
                        className='d-block w-100'
                        alt='Fourth slide'
                        src='/images/card-diversity.svg'
                        width={250}
                        height={200}
                      ></Image>
                      <div className='card-body'>
                        <h3 className='card-title'>Inclusive</h3>
                        <p className='card-text'>
                          Regarding job applications and recruitment, we treat
                          you as a human first, never discriminating based on
                          your background or experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='card'>
                      <Image
                        className='d-block w-100'
                        alt=' Fifth slide'
                        src='/images/card-integrity.svg'
                        width={250}
                        height={200}
                      ></Image>
                      <div className='card-body'>
                        <h3 className='card-title'>Driven</h3>
                        <p className='card-text'>
                          We never settle for average; we're always seeking ways
                          to raise the standards of staffing solutions and
                          provide training for entry level positions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='card'>
                      <Image
                        className='d-block w-100'
                        alt=' Sixth slide'
                        src='/images/card-impact.svg'
                        width={250}
                        height={200}
                      ></Image>
                      <div className='card-body'>
                        <h3 className='card-title'>Supportive</h3>
                        <p className='card-text'>
                          We're available and accessible to all via emails or
                          phone calls. Whether you have an inquiry or
                          application, or searching for a candidate or position,
                          we always support your decision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      {/* our-value-section */}
      <div>
        <section className='container aboutEmployersSec'>
          <div className='employersHeader'>
            <h1 className='employerH1'>Employers</h1>
          </div>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='card cardMain'>
                <Image
                  className='cardImg card-img-top img-fluid'
                  alt='Card image cap'
                  src='/images/Bag.png'
                  width={250}
                  height={200}
                ></Image>
                <div className='card-body cardContent'>
                  <h5 className='card-title cardTitle'>
                    Collaboration with clients
                  </h5>
                  <p className='card-text cardText'>
                    We know finding the right candidate(s) is not a one size
                    fits all approach. This is why we consciously tailor our
                    solutions around your business model and goals. The same
                    applies to job searches and resources; we assist in
                    upskilling you and get you a foot in the door for entry
                    level or high impact positions.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card cardMain'>
                <Image
                  className='cardImg card-img-top img-fluid'
                  alt='Card image cap'
                  src='/images/costEffective.png'
                  width={250}
                  height={200}
                ></Image>
                <div className='card-body cardContent'>
                  <h5 className='card-title cardTitle'>
                    Economical and effective
                  </h5>
                  <p className='card-text cardText'>
                    Fine tuned solutions allow us to provide resources and
                    recruitment services that don't disrupt your bank balance.
                    Our pricing is competitive, and we provide free hours of
                    senior/architect time to save you from being overcharged for
                    advice.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card cardMain'>
                <Image
                  className='cardImg card-img-top img-fluid'
                  alt='Card image cap'
                  src='/images/telegram.png'
                  width={250}
                  height={200}
                ></Image>
                <div className='card-body cardContent'>
                  <h5 className='card-title cardTitle'>
                    Consistent with communication
                  </h5>
                  <p className='card-text cardText'>
                    We're on standby to connect you to the relevant resources,
                    recruitment, and tech professionals, to ensure you receive
                    meaningful communication. Whether you're an organization,
                    candidate, or contractor, we care about your concerns and
                    are always ready to address them.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card cardMain'>
                <Image
                  className='cardImg card-img-top img-fluid'
                  alt='Card image cap'
                  src='/images/fexible.png'
                  width={250}
                  height={200}
                ></Image>
                <div className='card-body cardContent'>
                  <h5 className='card-title cardTitle'>Work around you</h5>
                  <p className='card-text cardText'>
                    We work around your requirements and timelines, connecting
                    you to our rich pool of high caliber tech talent when you
                    need them. Plus, as an employer, we listen to our team's
                    needs and priorities, devising solutions based on your
                    preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card cardMain'>
                <Image
                  className='cardImg card-img-top img-fluid'
                  alt='Card image cap'
                  src='/images/bulb.png'
                  width={250}
                  height={200}
                ></Image>
                <div className='card-body cardContent'>
                  <h5 className='card-title cardTitle'>Thorough work ethic</h5>
                  <p className='card-text cardText'>
                    To guarantee excellence, we undergo a strict and thorough
                    screening and interview process. Tests, employment
                    verification, and background checks are conducted before
                    presenting you with options for talent. With extensive
                    experience, we know how to look exclusive for those who are
                    qualified for the task.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card cardMain'>
                <Image
                  className='cardImg card-img-top img-fluid'
                  alt='Card image cap'
                  src='/images/experience.png'
                  width={250}
                  height={200}
                ></Image>
                <div className='card-body cardContent'>
                  <h5 className='card-title cardTitle'>Wealth of experience</h5>
                  <p className='card-text cardText'>
                    With over 60 years of combined experience and rare resources
                    supplied by our team, we provide unmatched opportunities, a
                    rich network, and extensive support for those in the tech
                    community. Our steady growth, and constant hunger to upskill
                    sets us apart from our current competitors and the ones
                    before us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* faq */}
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
                        When it comes to recruitment, we always deliver based on
                        your deadlines required. We listen to your needs,
                        streamline our process and find you skilled talent
                        quickly.
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
                        time to understand your needs first. Based on this
                        information, we then locate the right talent for your
                        company that aligns with your requirements.
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
      {/* employers */}
      <div>
        <section className='employees'>
          <div className='container'>
            <div className='row mt-5 business-meet'>
              <div className='col-sm-6'>
                <h1 className='employeesH1'>Employees</h1>
                <Image
                  className='sticky'
                  alt='Card image cap'
                  src='/images/business-meet.png'
                  width={500}
                  height={260}
                ></Image>
              </div>
              <div className='col-sm-6 contents'>
                <div className='content-box'>
                  <p>
                    Allow us to guide and assist you in finding the perfect role
                    for you
                  </p>
                </div>
                <div className='content-box'>
                  <p>Why should you trust us at Impact Career?</p>
                </div>
                <div className='content-box'>
                  <p>
                    We understand job search can be tiring. However, we know
                    finding the right job now will alleviate any past stress and
                    pain you must have had in your previous job search. So do
                    not worry, as we are here to serve you! We have the
                    best-tested methods that have helped thousands of people who
                    were once job seekers land notable roles in respectable
                    companies.
                  </p>
                </div>
                <div className='content-box'>
                  <p>
                    We are not just any recruitment agency. We can act as
                    mentors, coaches, and a bridge for networking. We have
                    established strong and long-term relationships with
                    thousands of companies and businesses. As a result, our job
                    pool constantly increases. So, there are many jobs and
                    opportunities for you.
                  </p>
                </div>
                <div className='content-box'>
                  <p>
                    We have something for everyone, whether you need a
                    full-time, part-time, or temporary job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* aboutlocation */}
      <div>
        <section className='aboutLocationSec'>
          <div className='container'>
            <div className='row locationRow'>
              <div className='col-sm-6'>
                <Image
                  className='locationImg'
                  alt='location-img'
                  src='/images/location.jpg'
                  width={550}
                  height={340}
                ></Image>
                <h3 className='locationH1'>Locations</h3>
                <p className='locationPara'>
                  We are closer to you than you think. We have local offices
                  that are inter-connected. Well-versed staffing professionals
                  run our regional offices to sort out employment prospects and
                  manage the talent pool. They can also use our extensive
                  network to provide extra services and advantages to employers
                  and job seekers.
                </p>
                <p className='locationPara'>
                  Our recruiting agency provides direct hire recruitment and
                  temporary and contract staffing if you are seeking to employ.
                  Additionally, if you're looking for your next fantastic
                  employment opportunity, our knowledgeable recruiters can
                  connect you with leading companies in your area.
                </p>
              </div>
              <div className='col-sm-6'>
                <Image
                  className='locationImg'
                  alt='Accessibility-img'
                  src='/images/Accessibility.png'
                  width={550}
                  height={340}
                ></Image>
                <h3 className='locationH1'>Accessibility</h3>
                <p className='locationPara'>
                  To ensure that the widest audience possible can use our
                  website information and services, we are dedicated to offering
                  an accessible website. We are still dedicated to meeting the
                  World Wide Web Consortium's WCAG 2.0 AA standards for Web
                  Content Accessibility (W3C). We keep an eye out for new
                  developments and make improvements as needed since we
                  understand that website accessibility and the WCAG 2.0 AA are
                  constantly changing.
                </p>
                <p className='locationPara'>
                  Please get in touch with us if you have any queries regarding
                  our accessibility guidelines or are having trouble using our
                  website for any other reason
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* job search */}
      <div>
        <section>
          <div className='container'>
            <h1 className='jobSearchH2'>Choose us for your job search</h1>
            <p>
              Whether you're looking to enter the IT industry, want to climb the
              ladder in your career, or work for us as a contractor, we work
              according to your objectives. Through constant communication and
              engagement, we familiarize your concerns and provide you with
              training resources and career counseling to diminish them.
            </p>
            <p>
              In parallel, we connect you to high value job opportunities in
              local, national, and remote positions with a high retention rate.
              Through our extensive vetted employer network and proven tested
              methods, we remove any stress you may have encountered in your job
              search. After all, our tried and tested methods have helped
              thousands of professionals land notable jobs with employers and as
              contractors at Impact Careers.
            </p>
            <p>
              Most importantly, being a recruitment agency is not our only
              priority; we nurture your needs as a mentor, coach, and bridge
              your network first. Whether you need a full-time, part-time, or
              temporary job or even guidance, we're ready to assist you.
            </p>
          </div>
        </section>
      </div>
      {/* timeline */}
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
                    <h6 className='timelineH6'>STEP 1:</h6>
                    <h5 className='timelineH5'>Understand your needs</h5>
                    <p className='timelinePara'>
                      If you're looking for a new position or a suitable
                      candidate, our work kicks off when we understand your
                      requirements. We ask you relevant questions through a call
                      or in person meet to understand what you need. Here we
                      uncover your preferred job prospects, staffing needs,
                      skills required, and qualities ideal candidates/employers
                      must possess.
                    </p>
                  </div>
                </div>
              </div>
              <div className='timeline left timelineLeft'>
                <div className='card cardSec'>
                  <div className='card-body p-4'>
                    <h6 className='timelineH6'>STEP 2:</h6>
                    <h5 className='timelineH5'>Develop a strategy</h5>
                    <p className='timelinePara'>
                      Based on this, we prepare a customized strategy
                      specifically around your timeline and goals. This strategy
                      also considers our expertise, and once formulated, we
                      communicate the deliverables to you.
                    </p>
                  </div>
                </div>
              </div>
              <div className='timeline right timelineRight'>
                <div className='card cardSec'>
                  <div className='card-body p-4'>
                    <h6 className='timelineH6'>STEP 3:</h6>
                    <h5 className='timelineH5'>Deliver the results</h5>
                    <p className='timelinePara'>
                      After this, we deliver on our strategy by implementing it
                      in our search for skilled professionals for your roles. We
                      handle background screenings, recruiting, testing, and
                      more to find the best professional for your business, to
                      save you the stress. We also utilize our rich network to
                      present you with empowering career opportunities in
                      leading corporations, startups, and organizations across
                      the USA.
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
