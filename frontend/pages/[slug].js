import React from 'react';
import Footer from '../components/Footer/Footer';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Head from 'next/head';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

export default function post({ post }) {
  return (
    <div>
      <Head>
        <title>product-page</title>
      </Head>

      <div>
        <div className='container product'>
          <div className='card page mt-5'>
            <div className='job-page'>
              <h3 className='m-3'>{post.title}</h3>
              <h6 className='m-3'>{post.description}</h6>
              <p>{post.content}</p>
            </div>
          </div>
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
      },
    },
  };
}
