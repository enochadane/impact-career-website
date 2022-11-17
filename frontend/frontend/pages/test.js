import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import { useState, useEffect } from 'react';

export default function Home({}) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Head>
        <title>product-page</title>
      </Head>
      <section>
        <div class='container product'>
          <div class='card page mt-5'>
            <div class='row mx-1 job-page'>
              <div class='col-3 col-md-2 col-lg-1 mb-2 in-page'>
                <img
                  src='/images/blue-img.jpeg'
                  class='imgrounded-start'
                  alt='logo'
                />
              </div>
              <div class='col-8 col-md-7 col-lg-4'>
                <div class='card-body inner-content'>
                  <h5 class='card-title mt-3'>Senior Product Designer</h5>
                  <p class='card-text'>Daniels Inc Abuja, Nigeria</p>
                  <p>$56,000</p>
                </div>
              </div>
              <div class='col-12 contents'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button
                  onClick={() => setModal(true)}
                  id='myBtn'
                  className='btn btn-outline-success sub-btn'
                >
                  Apply for this job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id='myModal'
        className='modal'
        style={{ display: modal ? 'block' : 'none' }}
      >
        <div className='modal-content'>
          <span className='close' onClick={() => setModal(false)}>
            &times;
          </span>
          <section id='contact-form'>
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
                      value=''
                      required
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
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
