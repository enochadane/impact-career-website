import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          jobsName
          urlSlug
          jobsLocation
          jobsPrice
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    blogPosts(pagination: { limit: 100 }) {
      data {
        attributes {
          title
          jobsName
          jobsLocation
          jobsPrice
          urlSlug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          jobsName
          jobsLocation
          jobsPrice
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

//faq
const GET_FAQ = gql`
  query {
    faqs {
      data {
        attributes {
          heading
          content
        }
      }
    }
  }
`;

const GET_FAQ_JOBS = gql`
  query {
    jobsFaqs {
      data {
        attributes {
          heading
          content
        }
      }
    }
  }
`;

export {
  GET_ALL_POSTS,
  GET_INDIVIDUAL_POST,
  GET_ALL_SLUGS,
  GET_FAQ,
  GET_FAQ_JOBS,
};
