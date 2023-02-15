import React from 'react';
import {
  GET_INDIVIDUAL_JOBS_POST,
  GET_ALL_JOBS_SLUGS,
} from '../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import Applyform3 from '../components/Applyform/Applyform3';
import ApplyModal from '../components/ApplyModal/ApplyModal';
import SchoolIcon from '@mui/icons-material/School';
import Link from 'next/link';

const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

export default function post({ post }) {
  console.log('BANU-POST', post);
  const [modal3, setModal3] = useState(false);
  return (
    <>
      <div>
        <Head>
          <title>product-page</title>
        </Head>
        <div className='container product'>
          <div className='card page mt-5'>
            <div className='row mx-1 job-page'>
              <div className='col-3 col-md-2 col-lg-1 mb-2 in-page'>
                <img
                  src={'/images/brif_case_2.png'}
                  width={80}
                  height={80}
                ></img>
              </div>
              <div className='col-8 col-md-7 col-lg-4'>
                <div className='card-body inner-content'>
                  <h5 className='card-title'>{post.title}</h5>
                  <div>
                    <h6 className='slugDescription'>
                      <span className='slugSpan'>{post.jobsName}</span>
                      <span>{post.jobsLocation}</span>
                    </h6>
                  </div>
                  <h6 className='slugDescription'>{post.jobsPrice}</h6>
                </div>
              </div>
              <div
                className='col-1 col-md-1 col-lg-1'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {post.skills?.data.length > 0 && (
                  <Link href={'/skill/' + post?.id}>
                    <SchoolIcon sx={{ fontSize: '35px' }} />
                  </Link>
                )}
              </div>
              {/* <p className="slugPara">{post.content}</p> */}
              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'break-word',
                  maxWidth: '100%',
                }}
              >
                {post.content}
              </pre>
              <div class='col-12 contents'>
                {/* <Link href={post.url}> */}
                <button
                  onClick={() => setModal3(true)}
                  id='myBtn'
                  className='btn btn-outline-success submit-btn'
                >
                  Apply for this job
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div
          id="myModal"
          className="modal"
          style={{ display: modal3 ? "block" : "none" }}
        >
          <div className="modal-content">
            <span className="close" onClick={() => setModal3(false)}>
              &times;
            </span>
            <section id="apply-form">
              <div className="container">
                <div className="apply-this-job">
                  <h2>Apply for this Job3</h2>
                  <p>
                    Please fill the details below to evaluate your candidature
                  </p>
                </div>
                <Applyform3 jobsName={post.title} />
              </div>
            </section>
          </div>
        </div> */}
      </div>
      <ApplyModal
        visible={modal3}
        onClose={() => setModal3(false)}
        jobId={post.id}
        jobUrl={post.url}
      />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_JOBS_SLUGS });

  const paths = data.trendingJobs.data.map((post) => {
    return {
      params: {
        slug: post.attributes.urlSlug,
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
    query: GET_INDIVIDUAL_JOBS_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.trendingJobs.data[0].attributes;

  return {
    props: {
      post: {
        title: attrs.title,
        jobsName: attrs.jobsName,
        jobsLocation: attrs.jobsLocation,
        jobsPrice: attrs.jobsPrice,
        content: attrs.content,
        image: attrs.image,
        url: attrs.url,
        id: data.trendingJobs.data[0].id,
        skills: attrs.skills,
      },
    },
  };
}
