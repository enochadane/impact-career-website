import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ArticlesModal from "../../components/ArticlesModal/ArticlesModal";

import {
  GET_TRAINING_SKILLS,
  GET_INTERVIEW_SKILLS,
} from "../../graphql/queries";

const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

function getNumberFromString(str) {
  let num = str.match(/\d+/);
  return num ? parseInt(num[0]) : null;
}

export default function Skills(props, params) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const getSkills = async () => {
    let query;
    setLoading(true);
    if (id.includes("training")) {
      query = GET_TRAINING_SKILLS;
    } else if (id.includes("interview")) {
      query = GET_INTERVIEW_SKILLS;
    }

    const skills = await client.query({
      query,
      variables: { id: getNumberFromString(id) },
    });

    if (id.includes("training")) {
      setSkills(skills.data?.trainingResource?.data?.attributes?.skills?.data);
    } else if (id.includes("interview")) {
      setSkills(skills.data?.interviewPrep?.data?.attributes?.skills?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getSkills();
    }
  }, [id]);
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
                <h1>Skills</h1>
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
              {loading && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "25px",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              <div className='row'>
                {skills && !loading && skills.length === 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "25px",
                    }}
                  >
                    <Typography
                      variant='subtitle1'
                      gutterBottom
                      sx={{ color: "gray" }}
                    >
                      No skills added to this section yet
                    </Typography>
                  </Box>
                )}
                {skills &&
                  skills.length > 0 &&
                  skills.map((skill) => (
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
                          src={`${skill.attributes.image.data.attributes.url}`}
                          width={350}
                          height={250}
                        ></Image>
                        <div className='card-body'>
                          <h5 className='card-title trainCardH5'>
                            {skill.attributes.title}
                          </h5>
                          <p className='card-text trainCardPara'>
                            {skill.attributes.description}
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
                            {console.log(
                              "Web articles: ",
                              skill.attributes?.web_articles
                            )}
                            <Button
                              variant='contained'
                              sx={{ backgroundColor: "#17A700" }}
                              onClick={() =>
                                handleArticlesClick(
                                  skill.attributes?.web_articles
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
                              href={
                                skill.attributes.videoPlayListLink
                                  ? skill.attributes.videoPlayListLink
                                  : ""
                              }
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
