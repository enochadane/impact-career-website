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

const GET_ALL_TRAINING_RESOURCES = gql`
  query {
    trainingResources {
      data {
        attributes {
          title
          description
          videoPlayListLink
          image {
            data {
              attributes {
                url
              }
            }
          }
          web_articles {
            data {
              attributes {
                title
                link
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_INTERVIEW_PREPS = gql`
  query {
    interviewPreps {
      data {
        attributes {
          title
          description
          videoPlayListLink
          image {
            data {
              attributes {
                url
              }
            }
          }
          web_articles {
            data {
              attributes {
                title
                link
              }
            }
          }
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
  GET_ALL_TRAINING_RESOURCES,
  GET_ALL_INTERVIEW_PREPS,
};
