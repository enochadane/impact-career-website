import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ArticlesModal from '../../components/ArticlesModal/ArticlesModal';

import {
  GET_SKILL,
  GET_ALL_SKILL_ID,
  GET_ALL_JOBS_ID,
  GET_JOB_SKILLS,
} from '../../graphql/queries';

const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

export default function Skill({ skills }) {
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
                <h1>Skill</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='container'>
            <section className='trainingSec' id='training-Section'>
              <div className='row'></div>
              <div className='row'>
                {skills &&
                  skills.length > 0 &&
                  skills.map((skill) => (
                    <div className='col-md-4 trainCardCol'>
                      <div
                        className='card trainingCard shadow-sm bg-body rounded'
                        style={{
                          border: '1px solid #009F01',
                          height: '100%',
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
                            paddingBottom: '20px',
                          }}
                        >
                          <div
                            className='col'
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            {console.log(
                              'Web articles: ',
                              skill.attributes?.web_articles
                            )}
                            <Button
                              variant='contained'
                              sx={{ backgroundColor: '#17A700' }}
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
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <Link
                              href={
                                skill.attributes.videoPlayListLink
                                  ? skill.attributes.videoPlayListLink
                                  : ''
                              }
                              style={{ textDecoration: 'none' }}
                            >
                              <Button
                                variant='contained'
                                sx={{ backgroundColor: '#17A700' }}
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

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_JOBS_ID });

  const paths = data.trendingJobs.data.map((job) => {
    console.log('job.id: ', job.id);
    return {
      params: {
        id: job.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_JOB_SKILLS,
    variables: { id: params.id },
  });

  const attrs = data.trendingJob.data.attributes;

  return {
    props: {
      skills: attrs.skills.data,
    },
  };
}
