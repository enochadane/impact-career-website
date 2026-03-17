import { useState, useEffect } from 'react';

import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  GET_FAQ_JOBS,
  GET_ALL_JOBS,
  getJobsByPage,
  GET_NUMBER_OF_JOBS,
  GET_FILTERED_JOBS,
} from '../graphql/queries';
import Button from '@mui/material/Button';
import Link from 'next/link';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import SchoolIcon from '@mui/icons-material/School';
import { useSelector } from 'react-redux';

import ApplyModal from '../components/ApplyModal/ApplyModal';
import axios from 'axios';

export default function Job({ posts, name, numberOfJobs }) {
  const user = useSelector((state) => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  const [jobId, setJobId] = useState();
  const [jobUrl, setJobUrl] = useState();
  const [search, setSearch] = useState();
  const [filtered, setFiltered] = useState(posts);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(
    posts ? Math.ceil(numberOfJobs / 10) : 1
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const getJobs = async () => {
    try {
      const jobsReqConfig = {
        method: "GET",
        url: `http://localhost:4000/job/get-jobs-by-page/${page}`,
      };

      const response = await axios(jobsReqConfig);

      setFiltered(response.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchedJobs = async () => {
    try {
      const jobsReqConfig = {
        method: 'GET',
        url: `${process.env.SERVER}/job/get-filtered-jobs/${search}`,
      };

      const response = await axios(jobsReqConfig);

      setFiltered(response.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search) {
      getSearchedJobs();
    } else {
      getJobs();
    }
  }, [search, page]);

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  const handleJobVisit = async (jobId, jobUrl) => {
    const reqConfig = {
      method: 'POST',
      url: `${process.env.SERVER}/candidate/job-visit`,
      data: {
        userId: user.id,
        jobId,
      },
    };

    await axios(reqConfig);
    window.location.href = jobUrl;
  };

  return (
    <>
      <ApplyModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        jobId={jobId}
        jobUrl={jobUrl}
      />
      <div>
        <Head>
          <title>Jobs</title>
        </Head>
        <div className='Banner jobs-banner'>
          <div className='container-fluid'>
            <div className='row m-0'>
              <div>
                <h1>Trending Jobs</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className='col-md-12'
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '0px',
          }}
        >
          <FormControl sx={{ m: 1, width: '25ch' }} variant='filled'>
            <InputLabel htmlFor='filled-adornment-password'>Search</InputLabel>
            <OutlinedInput
              value={search}
              onChange={handleSearchChange}
              endAdornment={
                <InputAdornment position='end'>
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <section className='trending-jobs mt-5'>
            <div className='product-designer'>
              <div className='container'>
                <div
                  className='row'
                  style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                  }}
                >
                  {filtered.map((val, i) => {
                    return (
                      <div className='col-md-12'>
                        <div
                          className='card col-12 candidates'
                          style={{
                            border: '1px solid #ddd',
                            paddingBottom: '10px',
                          }}
                        >
                          <div className='row g-1 '>
                            <div
                              className='col-md-2 col-lg-2 col-4'
                              style={{ margin: 'auto' }}
                            >
                              <Link
                                className='candidatesLink'
                                key={i}
                                href={val.urlSlug ? val.urlSlug : ' '}
                              >
                                <img
                                  src={'/images/brif_case_2.png'}
                                  width={100}
                                  height={100}
                                ></img>
                              </Link>
                            </div>
                            <div className='col-md-7 col-7'>
                              <Link
                                className='candidatesLink'
                                key={i}
                                href={val.urlSlug ? val.urlSlug : ' '}
                              >
                                <div className='card-body senior-product '>
                                  <h5 className='card-title mt-3'>
                                    {val.title}
                                  </h5>
                                  <p className='card-text'>
                                    {val.companyName}
                                    {val.location}
                                    {val.salary}
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div
                              className='col-md-2 col-lg-2 col-12'
                              style={{
                                display: 'flex',
                                gap: '20px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto',
                              }}
                            >
                              {val.attributes?.skills?.data[0]?.attributes
                                ?.videoPlayListLink && (
                                <Link href={'/skill/' + val?.id}>
                                  <SchoolIcon sx={{ fontSize: '35px' }} />
                                </Link>
                              )}
                              <Button
                                variant='contained'
                                sx={{
                                  borderRadius: '5',
                                  backgroundColor: '#009F01',
                                }}
                                onClick={() => {
                                  handleJobVisit(val._id, val.url);
                                }}
                              >
                                Apply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <Pagination
            count={numberOfPages}
            page={page}
            onChange={handlePageChange}
            size='large'
            sx={{
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              paddingBottom: '20px',
            }}
          />
          {/* <section className="faq">
            <div className="container col-sm-8">
              <div className="row acc-faq">
                <div className="col-md-12">
                  <h1 className="mt-5 mb-5 text-center faqHeading">
                    Job Search Frequently Asked Questions
                  </h1>
                  {name.map((val, index) => {
                    return (
                      <div>
                        <div className="accordion" id="accordionSection">
                          <div className="accordion-item mb-3">
                            <h2 className="accordion-header">
                              <button
                                type="button"
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseOne${index}`}
                              >
                                {val.heading}
                              </button>
                            </h2>

                            <div
                              className="accordion-collapse collapse"
                              id={`collapseOne${index}`}
                              data-bs-parent="#accordionSection"
                            >
                              <div className="accordion-body pt-0">
                                <p>{val.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const jobsReqConfig = {
      method: 'GET',
      url: `${process.env.SERVER}/job/get-jobs-by-page/1`,
    };

    const jobs = await axios(jobsReqConfig);

    const noOfJobsConfig = {
      method: 'GET',
      url: `${process.env.SERVER}/job/total-jobs`,
    };

    const noOfJobs = await axios(noOfJobsConfig);

    return {
      props: {
        posts: jobs.data.jobs,
        name: 'x',
        numberOfJobs: noOfJobs.data.count,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts: [],
      name: [],
    },
  };
}
