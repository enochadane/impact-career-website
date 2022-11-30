import React from 'react';
import Footer from '../components/Footer/Footer';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import Applyform from '../components/Applyform/Applyform';

const client = new ApolloClient({
  uri: 'http://13.59.166.79:1337/graphql',
  cache: new InMemoryCache(),
});

export default function post({ post }) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Head>
        <title>product-page</title>
      </Head>
      <div class="container product">
        <div class="card page mt-5">
          <div class="row mx-1 job-page">
            <div class="col-3 col-md-2 col-lg-1 mb-2 in-page">
              <img
                src={`http://13.59.166.79:1337${post.image.data.attributes.url}`}
                width={80}
                height={80}
              ></img>
            </div>
            <div class="col-8 col-md-7 col-lg-4">
              <div class="card-body inner-content">
                <h5 class="card-title">{post.title}</h5>
                <h6 className="slugDescription">{post.description}</h6>
              </div>
            </div>
            <p className="slugPara">{post.content}</p>
            <div class="col-12 contents">
              <button
                onClick={() => setModal(true)}
                id="myBtn"
                className="btn btn-outline-success sub-btn"
              >
                Apply for this job
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="myModal"
        className="modal"
        style={{ display: modal ? 'block' : 'none' }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => setModal(false)}>
            &times;
          </span>
          <section id="apply-form">
            <div className="container">
              <div className="apply-this-job">
                <h2>Apply for this Job</h2>
                <p>
                  Please fill the details below to evaluate your candidature
                </p>
              </div>

              <Applyform />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_SLUGS });

  const paths = data.blogPosts.data.map((post) => {
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
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.blogPosts.data[0].attributes;

  return {
    props: {
      post: {
        title: attrs.title,
        description: attrs.description,
        content: attrs.content,
        image: attrs.image,
      },
    },
  };
}
