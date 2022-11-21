import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Footer from "../components/Footer/Footer";

export default function Home({ posts, name }) {
  return (
    <div>
      <Head>
        <title>Resources</title>
      </Head>
      <div className='Banner resources-banner'>
        <div className='container-fluid'>
          <div className='row m-0'>
            <div>
              <h1>Resources</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container'>
          <section className='trainingSec' id='training-Section'>
            <div className='row'>
              <div className='col trainingCol'>
                <h3 className='trainingH1'>Training Resources</h3>
                <p className='trainingPara'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse tincidunt sagittis eros. Quisque quis euimdod
                  lorem. Etiam sodales ac felis id interdum.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 trainCardCol'>
                <div className='card trainingCard shadow-sm bg-body rounded'>
                  <Image
                    className='card-img-top trainingImg'
                    src='/images/employeesWebinar.jpg'
                    width={350}
                    height={250}
                  ></Image>
                  <div className='card-body'>
                    <h5 className='card-title trainCardH5'>
                      Employees Webinar
                    </h5>
                    <p className='card-text trainCardPara'>
                      We have teamed up with some of the greatest career experts
                      worldwide to provide you guidance periodically on how to
                      find the ideal job, how to market yourself to prospective
                      employers, the importance of and how to go about effective
                      networking, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 trainCardCol'>
                <div className='card trainingCard shadow-sm bg-body rounded'>
                  <Image
                    className='card-img-top trainingImg'
                    src='/images/employeesWebinar2.jpg'
                    width={350}
                    height={250}
                  ></Image>
                  <div className='card-body'>
                    <h5 className='card-title trainCardH5'>
                      Employees Webinar
                    </h5>
                    <p className='card-text trainCardPara'>
                      We have teamed up with some of the greatest career experts
                      worldwide to provide you guidance periodically on how to
                      find the ideal job, how to market yourself to prospective
                      employers, the importance of and how to go about effective
                      networking, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 trainCardCol'>
                <div className='card trainingCard shadow-sm bg-body rounded'>
                  <Image
                    className='card-img-top trainingImg'
                    src='/images/employeesWebinar3.jpg'
                    width={350}
                    height={250}
                  ></Image>
                  <div className='card-body'>
                    <h5 className='card-title trainCardH5'>
                      Employees Webinar
                    </h5>
                    <p className='card-text trainCardPara'>
                      We have teamed up with some of the greatest career experts
                      worldwide to provide you guidance periodically on how to
                      find the ideal job, how to market yourself to prospective
                      employers, the importance of and how to go about effective
                      networking, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='interviewSec' id='interview-Section'>
            <div>
              <h1 className='interviewH1'>Interview Prep</h1>
              <p className='interviewPara trainingPara'>
                Do you have an interview soon? Do you need help in prepping for
                the interview? At Impact Career, we know how hard it can be to
                get scheduled for an interview. To help you maximize this
                opportunity, we have experts that will guide you in your
                interview prep
              </p>
            </div>
            <div className='row'>
              <div className='col-md-4 trainCardCol'>
                <div className='card interviewCard shadow-sm bg-body rounded'>
                  <a href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                    <Image
                      className='card-img-top interviewImg'
                      src='/images/youTube1.png'
                      width={350}
                      height={250}
                    ></Image>
                  </a>
                  <div className='card-body interviewCardBody'>
                    <h5 className='card-title trainCardH5'>
                      Employees Webinar
                    </h5>
                    <p className='card-text trainCardPara'>
                      We have teamed up with some of the greatest career experts
                      worldwide to provide you guidance periodically on how to
                      find the ideal job, how to market yourself to prospective
                      employers, the importance of and how to go about effective
                      networking, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 trainCardCol'>
                <div className='card interviewCard shadow-sm bg-body rounded'>
                  <a href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                    <Image
                      className='card-img-top interviewImg'
                      src='/images/youTube2.png'
                      width={350}
                      height={250}
                    ></Image>
                  </a>
                  <div className='card-body interviewCardBody'>
                    <h5 className='card-title trainCardH5'>
                      Employees Webinar
                    </h5>
                    <p className='card-text trainCardPara'>
                      We have teamed up with some of the greatest career experts
                      worldwide to provide you guidance periodically on how to
                      find the ideal job, how to market yourself to prospective
                      employers, the importance of and how to go about effective
                      networking, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 trainCardCol'>
                <div className='card interviewCard shadow-sm bg-body rounded'>
                  <a href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                    <Image
                      className='card-img-top interviewImg'
                      src='/images/discussion.jpg'
                      width={350}
                      height={250}
                    ></Image>
                  </a>
                  <div className='card-body interviewCardBody'>
                    <h5 className='card-title trainCardH5'>
                      Blog Impact Careers
                    </h5>
                    <p className='card-text trainCardPara'>
                      Blog focuses on giving workplace tips for both employers
                      and employees. We focus on current workplace issues
                      ranging from interviewing, onboarding, employee retention,
                      promotion, job training, team building, and corporation.
                      We will also jump on interviews and conversations with
                      professionals to prepare you for the future. We update the
                      blog often, so don’t forget to check it out for helpful
                      tips to help you better navigate your career or employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
