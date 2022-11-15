// import React from 'react';
// import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '../graphql/queries';
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
// });s

// export default function post({ post }) {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <h4>{post.description}</h4>
//       <p>{post.content}</p>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const { data } = await client.query({ query: GET_ALL_SLUGS });

//   const paths = data.blogPosts.data.map((post) => {
//     return {
//       params: {
//         slug: post.attributes.urlSlug,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { data } = await client.query({
//     query: GET_INDIVIDUAL_POST,
//     variables: { slugUrl: params.slug },
//   });

//   const attrs = data.blogPosts.data[0].attributes;

//   return {
//     props: {
//       post: {
//         title: attrs.title,
//         description: attrs.description,
//         content: attrs.content,
//       },
//     },
//   };
// }
