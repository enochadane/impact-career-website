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
          skills {
            data {
              id
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
            skills {
              data {
                id
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
          skills {
            data {
              id
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

const GET_TRAINING_SKILLS = gql`
  query ($id: ID!) {
    trainingResource(id: $id) {
      data {
        attributes {
          skills {
            data {
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                videoPlayListLink
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
      }
    }
  }
`;

const GET_INTERVIEW_SKILLS = gql`
  query ($id: ID!) {
    interviewPrep(id: $id) {
      data {
        attributes {
          skills {
            data {
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                videoPlayListLink
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
      }
    }
  }
`;

const GET_ALL_SKILL_ID = gql`
  query {
    skills {
      data {
        id
      }
    }
  }
`;

const GET_ALL_JOBS_ID = gql`
  query {
    trendingJobs(pagination: { limit: 10000 }) {
      data {
        id
      }
    }
  }
`;

const GET_JOB_SKILLS = gql`
  query ($id: ID!) {
    trendingJob(id: $id) {
      data {
        attributes {
          skills {
            data {
              attributes {
                title
                description
                videoPlayListLink
                web_articles {
                  data {
                    attributes {
                      title
                      link
                    }
                  }
                }
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
      }
    }
  }
`;

const GET_SKILL = gql`
  query ($id: ID!) {
    skill(id: $id) {
      data {
        id
        attributes {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          videoPlayListLink
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
          skills {
            data {
              attributes {
                title
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
    trendingJobs(pagination: { limit: 10000 }) {
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
        id
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
        id
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
  GET_TRAINING_SKILLS,
  GET_INTERVIEW_SKILLS,
  GET_SKILL,
  GET_ALL_SKILL_ID,
  GET_ALL_JOBS_ID,
  GET_JOB_SKILLS,
};
