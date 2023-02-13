import { useState } from "react";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

import {
  GET_ALL_TRAINING_RESOURCES,
  GET_ALL_INTERVIEW_PREPS,
} from "../graphql/queries";
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
                        height: "100%",
                      }}
                    >
                      <Image
                        alt='training image'
                        className='card-img-top trainingImg'
                        src={`${training.attributes.image.data[0].attributes.url}`}
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
                {props.interviewPreps.map((interviewPrep) => (
                  <div className='col-md-4 trainCardCol'>
                    <div
                      className='card interviewCard shadow-sm bg-body rounded'
                      style={{
                        border: "1px solid #009F01",
                      }}
                    >
                      <Link href='https://www.youtube.com/watch?v=azRoTvQt0YQ&t=1s'>
                        <Image
                          alt='interview prep image'
                          className='card-img-top interviewImg'
                          src={`${interviewPrep.attributes.image.data[0].attributes.url}`}
                          width={350}
                          height={250}
                        ></Image>
                      </Link>
                      <div className='card-body interviewCardBody'>
                        <h5 className='card-title trainCardH5'>
                          {interviewPrep.attributes.title}
                        </h5>
                        <p className='card-text trainCardPara'>
                          {interviewPrep.attributes.description}
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
                                interviewPrep.attributes?.web_articles
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
                            href={interviewPrep.attributes.videoPlayListLink}
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

  try {
    const trainingResources = await client.query({
      query: GET_ALL_TRAINING_RESOURCES,
    });

    const interviewPreps = await client.query({
      query: GET_ALL_INTERVIEW_PREPS,
    });

    return {
      props: {
        trainings: trainingResources.data.trainingResources.data,
        interviewPreps: interviewPreps.data.interviewPreps.data,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      trainings: [],
      interviewPreps: [],
    },
  };
}
