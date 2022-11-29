import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_POSTS, GET_FAQ_JOBS } from '../graphql/queries';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

export default function Home({ posts, name }) {
  return (
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
      <div>
        <section className='trending-jobs mt-5'>
          <div className='product-designer'>
            <div className='container'>
              <div className='row'>
                {posts.map((val, i) => {
                  return (
                    <div className='col-md-6'>
                      <div className='card col-12 candidates'>
                        <Link
                          className='candidatesLink'
                          key={i}
                          href={val.attributes.urlSlug}
                        >
                          <div className='row g-1 '>
                            <div className='col-md-4 col-lg-3 col-4'>
                              <img
                                src={`http://13.59.166.79:1337${val.attributes.image.data.attributes.url}`}
                                width={100}
                                height={100}
                              ></img>
                            </div>
                            <div className='col-md-8 col-8'>
                              <div className='card-body senior-product '>
                                <h5 className='card-title mt-3'>
                                  {val.attributes.title}
                                </h5>
                                <p className='card-text'>
                                  {val.attributes.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div>
          <section className='faq'>
            <div className='container col-sm-8'>
              <div className='row acc-faq'>
                <div className='col-md-12'>
                  <h1 className='mt-5 mb-5 text-center faqHeading'>
                    Job Search Frequently Asked Questions
                  </h1>
                  {name.map((val, index) => {
                    // console.log("index", index);
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
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'http://13.59.166.79:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });
  const getfaqdata = await client.query({
    query: GET_FAQ_JOBS,
  });

  return {
    props: {
      posts: data.blogPosts.data,
      name: getfaqdata.data.jobsFaqs.data,
    },
  };
}
