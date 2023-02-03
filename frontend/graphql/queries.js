import { gql } from '@apollo/client';

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

//Trending Jobs
const GET_ALL_JOBS = gql`
  query {
    trendingJobs(pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          title
          jobsName
          jobsLocation
          jobsPrice
          content
          urlSlug
          url
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

const GET_INDIVIDUAL_JOBS_POST = gql`
  query ($slugUrl: String!) {
    trendingJobs(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        id
        attributes {
          title
          jobsName
          jobsLocation
          jobsPrice
          urlSlug
          content
          url
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
const GET_ALL_JOBS_SLUGS = gql`
  query {
    trendingJobs(pagination: { limit: 1000 }) {
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

export {
  GET_FAQ,
  GET_FAQ_JOBS,
  GET_ALL_JOBS,
  GET_INDIVIDUAL_JOBS_POST,
  GET_ALL_JOBS_SLUGS,
};
