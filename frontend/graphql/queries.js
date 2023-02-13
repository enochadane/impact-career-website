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
    trendingJobs(
      sort: "createdAt:desc"
      pagination: { pageSize: 10, page: 1 }
    ) {
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
          training_resource {
            data {
              attributes {
                videoPlayListLink
              }
            }
          }
        }
      }
    }
  }
`;

const getJobsByPage = (page) => {
  return gql`
    query {
      trendingJobs(sort: "createdAt:desc", pagination: { pageSize: 10, page: ${page} }) {
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
            training_resource {
              data {
                attributes {
                  videoPlayListLink
                }
              }
            }
          }
        }
      }
    }
  `;
};

const GET_FILTERED_JOBS = gql`
  query ($key: String!) {
    trendingJobs(
      filters: {
        or: [
          { title: { containsi: $key } }
          { jobsName: { containsi: $key } }
          { jobsLocation: { containsi: $key } }
        ]
      }
      sort: "createdAt:desc"
      pagination: { pageSize: 10, page: 1 }
    ) {
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
          training_resource {
            data {
              attributes {
                videoPlayListLink
              }
            }
          }
        }
      }
    }
  }
`;

const GET_NUMBER_OF_JOBS = gql`
  query {
    trendingJobs {
      meta {
        pagination {
          total
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
          training_resource {
            data {
              attributes {
                videoPlayListLink
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
          training_resource {
            data {
              attributes {
                videoPlayListLink
              }
            }
          }
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
  GET_NUMBER_OF_JOBS,
  getJobsByPage,
  GET_FILTERED_JOBS,
};
