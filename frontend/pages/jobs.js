import { useState, useEffect } from 'react';

import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_FAQ_JOBS, GET_ALL_JOBS } from '../graphql/queries';
import Button from '@mui/material/Button';
import Link from 'next/link';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import ApplyModal from '../components/ApplyModal/ApplyModal';

export default function Job({ posts, name }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [jobId, setJobId] = useState();
  const [jobUrl, setJobUrl] = useState();
  const [search, setSearch] = useState();
  const [filtered, setFiltered] = useState(posts);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      const filteredList = posts.filter(
        (post) =>
          post.attributes.title.toLowerCase().includes(search.toLowerCase()) ||
          post.attributes.jobsName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          post.attributes.jobsLocation
            .toLowerCase()
            .includes(search.toLowerCase())
      );

      setFiltered(filteredList);
    }
  }, [search]);

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
                          }}
                        >
                          <div className='row g-1 '>
                            <div
                              className='col-md-2 col-lg-2 col-2 '
                              style={{ margin: 'auto' }}
                            >
                              <Link
                                className='candidatesLink'
                                key={i}
                                href={val.attributes.urlSlug}
                              >
                                <img
                                  src={
                                    '/images/brif_case_2.png'
                                    // process.env.BACKEND_IMG +
                                    // '/uploads/orange_img_7cd28e9ae5.jpg'
                                    //   val.attributes.image.data !==
                                    // null
                                    //   ? val.attributes.image.data.attributes.url
                                    //   : "/uploads/orange_img_7cd28e9ae5.jpg"
                                  }
                                  width={100}
                                  height={100}
                                ></img>
                              </Link>
                            </div>
                            <div className='col-md-8 col-8'>
                              <Link
                                className='candidatesLink'
                                key={i}
                                href={val.attributes.urlSlug}
                              >
                                <div className='card-body senior-product '>
                                  <h5 className='card-title mt-3'>
                                    {val.attributes.title}
                                  </h5>
                                  <p className='card-text'>
                                    {val.attributes.jobsName}
                                    {val.attributes.jobsLocation}
                                    {val.attributes.jobsPrice}
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div
                              className='col-md-2 col-lg-2 col-2 '
                              style={{ margin: 'auto' }}
                            >
                              <Button
                                variant='contained'
                                sx={{
                                  borderRadius: '5',
                                  backgroundColor: '#009F01',
                                }}
                                onClick={() => {
                                  setModalVisible(true);
                                  setJobUrl(val.attributes.url);
                                  setJobId(val.id);
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
          <section className='faq'>
            <div className='container col-sm-8'>
              <div className='row acc-faq'>
                <div className='col-md-12'>
                  <h1 className='mt-5 mb-5 text-center faqHeading'>
                    Job Search Frequently Asked Questions
                  </h1>
                  {name.map((val, index) => {
                    return (
                      <div>
                        <div className='accordion' id='accordionSection'>
                          <div className='accordion-item mb-3'>
                            <h2 className='accordion-header'>
                              <button
                                type='button'
                                className='accordion-button collapsed'
                                data-bs-toggle='collapse'
                                data-bs-target={`#collapseOne${index}`}
                              >
                                {val.attributes.heading}
                              </button>
                            </h2>

                            <div
                              className='accordion-collapse collapse'
                              id={`collapseOne${index}`}
                              data-bs-parent='#accordionSection'
                            >
                              <div className='accordion-body pt-0'>
                                <p>{val.attributes.content}</p>
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
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: process.env.BACKEND_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_JOBS,
  });
  const getfaqdata = await client.query({
    query: GET_FAQ_JOBS,
  });

  return {
    props: {
      posts: data.trendingJobs.data,
      name: getfaqdata.data.jobsFaqs.data,
    },
  };
}
