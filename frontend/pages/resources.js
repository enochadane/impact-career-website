import { useState } from "react";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

import { GET_ALL_TRAINING_RESOURCES } from "../graphql/queries";
import ArticlesModal from "../components/ArticlesModal/ArticlesModal";

export default function Resource(props) {
  const [articleModalVisible, setArticleModalVisible] = useState(false);
  const [webArticles, setWebArticles] = useState([]);

  const handleArticlesClick = (webArticles) => {
    if (webArticles) {
      setWebArticles(webArticles);
    }

    setArticleModalVisible(true);
  };

  return (
    <>
      <ArticlesModal
        visible={articleModalVisible}
        onClose={() => setArticleModalVisible(false)}
        webArticles={webArticles}
      />
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
                    Upskilling opportunities to help you reach your professional
                    goals. Whether you're looking to gain a new skill, enhance
                    your expertise, or broaden your knowledge, we provide you
                    with the tools you need to succeed.
                  </p>
                </div>
              </div>
              <div className='row'>
                {props.trainings.map((training) => (
                  <div className='col-md-4 trainCardCol'>
                    <div
                      className='card trainingCard shadow-sm bg-body rounded'
                      style={{
                        border: "1px solid #009F01",
                      }}
                    >
                      <Image
                        className='card-img-top trainingImg'
                        src='/images/employeesWebinar.jpg'
                        width={350}
                        height={250}
                      ></Image>
                      <div className='card-body'>
                        <h5 className='card-title trainCardH5'>
                          {training.attributes.title}
                        </h5>
                        <p className='card-text trainCardPara'>
                          {training.attributes.description}
                        </p>
                      </div>
                      <div
                        className='row'
                        style={{
                          paddingBottom: "20px",
                        }}
                      >
                        <div
                          className='col'
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant='contained'
                            sx={{ backgroundColor: "#17A700" }}
                            onClick={() =>
                              handleArticlesClick(
                                training.attributes?.web_articles
                              )
                            }
                          >
                            Articles
                          </Button>
                        </div>
                        <div
                          className='col'
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            href={training.attributes.videoPlayListLink}
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant='contained'
                              sx={{ backgroundColor: "#17A700" }}
                            >
                              Tutorial
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className='interviewSec' id='interview-Section'>
              <div>
                <h1 className='interviewH1'>Interview Prep</h1>
                <p className='interviewPara trainingPara'>
                  Do you have an interview soon? Do you need help in prepping
                  for the interview? At Impact Career, we know how hard it can
                  be to get scheduled for an interview. To help you maximize
                  this opportunity, we have experts that will guide you in your
                  interview prep
                </p>
              </div>
              <div className='row'>
                <div className='col-md-4 trainCardCol'>
                  <div className='card interviewCard shadow-sm bg-body rounded'>
                    <Link href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                      <Image
                        className='card-img-top interviewImg'
                        src='/images/youTube1.png'
                        width={350}
                        height={250}
                      ></Image>
                    </Link>
                    <div className='card-body interviewCardBody'>
                      <h5 className='card-title trainCardH5'>
                        Employees Webinar
                      </h5>
                      <p className='card-text trainCardPara'>
                        We have teamed up with some of the greatest career
                        experts worldwide to provide you guidance periodically
                        on how to find the ideal job, how to market yourself to
                        prospective employers, the importance of and how to go
                        about effective networking, etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 trainCardCol'>
                  <div className='card interviewCard shadow-sm bg-body rounded'>
                    <Link href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                      <Image
                        className='card-img-top interviewImg'
                        src='/images/youTube2.png'
                        width={350}
                        height={250}
                      ></Image>
                    </Link>
                    <div className='card-body interviewCardBody'>
                      <h5 className='card-title trainCardH5'>
                        Employees Webinar
                      </h5>
                      <p className='card-text trainCardPara'>
                        We have teamed up with some of the greatest career
                        experts worldwide to provide you guidance periodically
                        on how to find the ideal job, how to market yourself to
                        prospective employers, the importance of and how to go
                        about effective networking, etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 trainCardCol'>
                  <div className='card interviewCard shadow-sm bg-body rounded'>
                    <Link href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                      <Image
                        className='card-img-top interviewImg'
                        src='/images/discussion.jpg'
                        width={350}
                        height={250}
                      ></Image>
                    </Link>
                    <div className='card-body interviewCardBody'>
                      <h5 className='card-title trainCardH5'>
                        Blog Impact Careers
                      </h5>
                      <p className='card-text trainCardPara'>
                        Blog focuses on giving workplace tips for both employers
                        and employees. We focus on current workplace issues
                        ranging from interviewing, onboarding, employee
                        retention, promotion, job training, team building, and
                        corporation. We will also jump on interviews and
                        conversations with professionals to prepare you for the
                        future. We update the blog often, so don’t forget to
                        check it out for helpful tips to help you better
                        navigate your career or employees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: process.env.BACKEND_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_TRAINING_RESOURCES,
  });

  return {
    props: {
      trainings: data.trainingResources.data,
    },
  };
}
