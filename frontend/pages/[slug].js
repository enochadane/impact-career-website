import React from "react";
import Footer from "../components/Footer/Footer";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../graphql/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import ContactForm from "../components/form/ContactForm";

const client = new ApolloClient({
  uri: "http://13.59.166.79:1337/graphql",
  cache: new InMemoryCache(),
});

export default function post({ post }) {
  const [modal, setModal] = useState(false);

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
              <button
                onClick={() => setModal(true)}
                id='myBtn'
                className='btn btn-outline-success submit-btn'
              >
                Apply for this job
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id='myModal'
        className='modal'
        style={{ display: modal ? "block" : "none" }}
      >
        <div className='modal-content'>
          <span className='close' onClick={() => setModal(false)}>
            &times;
          </span>
          {/* <section id='contact-form'>
            <div className='container'>
              <div className='get-in-touch'>
                <h2>Apply for this Job</h2>
                <p>
                  Please fill the details below to evaluate your candidature
                </p>
              </div>
              <form className='needs-validation' method='post'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder='First-Name'
                    />
                    <div className='invalid-feedback'>
                      Valid first name is required.
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      placeholder='Last-Name'
                    />
                    <div className='invalid-feedback'>
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Email'
                    />
                    <div className='invalid-feedback'>
                      Valid email address is required.
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='tel'
                      className='form-control'
                      id='Phone'
                      placeholder='Mobile number'
                    />
                    <div className='invalid-feedback'>
                      Valid phone number is required.
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div class='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Position Location'
                      placeholder='Your Location'
                    />

                    <div className='invalid-feedback'>
                      Please enter position location .
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Current-Salary'
                      placeholder='Current-Salary'
                    />
                    <div className='invalid-feedback'>
                      Please enter Title of Position.
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        id='Notice period'
                        placeholder='Notice period'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='Linked in URL'
                        placeholder='LinkedIn URL'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-12'>
                    <div>
                      <input
                        type='file'
                        className='w-file-upload-input form-control'
                        accept='.pdf, .doc, .docx, .txt'
                        name='Resume-Upload'
                        data-iconName='fa-solid fa-cloud-arrow-up'
                        data-name='Upload Job Description, If Available'
                        aria-hidden='true'
                        id='Resume-Upload'
                        aria-placeholder=' Upload Job Description, If Available'
                      />
                      <p className='text-center'>
                        Accepted formats : PDF, DOC, DOCX, TXT (Max file size
                        10MB)
                      </p>
                    </div>
                  </div>
                </div>
                <div className='form-group text-center'>
                  <input
                    type='submit'
                    value='Submit'
                    data-wait='Please wait...'
                    className='site-btn'
                  />
                </div>
              </form>
            </div>
          </section> */}
          <section id='contact-form'>
            <div className='container'>
              <div className='get-in-touch'>
                <h2>Get in Touch</h2>
                <p>
                  We do not believe staffing and recruiting are limited to
                  finding and hiring people to fill open positions. To locate
                  the most suitable consultant or client for each individual, we
                  take the time to develop true connections with both parties.
                </p>
              </div>

              <ContactForm />
            </div>
          </section>
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
