import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

export default function Home({ posts, name }) {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div>
        <div className='Banner contact-banner'>
          <div className='container-fluid'>
            <div className='row m-0'>
              <div>
                <h1>Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards section */}
      <div>
        <section id='contact-card-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card border-0'>
                  <div className='topContent'>
                    <Image
                      src='/images/find-job.svg'
                      alt='find-job'
                      className='img-fluid'
                      width={50}
                      height={50}
                    ></Image>
                    <h2>Find a Job</h2>
                  </div>
                  <div className='para'>
                    <p>
                      Find the best contract, temp, or permanent company with
                      the best company through Impact Career
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card border-0'>
                  <div className='topContent'>
                    <Image
                      src='/images/hire-talent.svg'
                      width={50}
                      height={50}
                      alt='hire-talent'
                      className='img-fluid'
                    ></Image>
                    <h2>Hire a Talent</h2>
                  </div>
                  <div className='para'>
                    <p>
                      Let Impact Careers find the best talent for your company
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card border-0'>
                  <div className='topContent'>
                    <Image
                      src='/images/ask-question.svg'
                      width={50}
                      height={50}
                      alt='ask-question'
                      className='img-fluid'
                    ></Image>
                    <h2>Ask any Question</h2>
                  </div>
                  <div>
                    <p className='para'>
                      Do you have any questions for us? The team is ready to
                      respond to any questions, issues, and problems you face.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        {/* form section */}
        <div>
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
              <form
                id='registerForm'
                novalidate
                className='needs-validation'
                method='post'
              >
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder='First Name'
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
                      placeholder='Last Name'
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
                      placeholder='Phone'
                    />
                    <div className='invalid-feedback'>
                      Valid phone number is required.
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Title'
                      placeholder='Title'
                    />
                    <div className='invalid-feedback'>
                      Please enter a title .
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Organization'
                      placeholder='Organization'
                    />
                    <div className='invalid-feedback'>
                      Please enter the Organization name.
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Website'
                      placeholder=' Website'
                    />
                    <div className='invalid-feedback'>
                      Please enter a website .
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <select
                      className='form-select form-control'
                      id='Position Type'
                    >
                      <option value='Temporary / Contract'>
                        Temporary / Contract
                      </option>
                      <option value='Direct Hire / Permanent'>
                        Direct Hire / Permanent
                      </option>
                      <option value='Executive / Search'>
                        Executive / Search
                      </option>
                      <option value='Payrolling'>Payrolling</option>
                      <option value='Apply With Us As A Candidate'>
                        Apply With Us As A Candidate
                      </option>
                    </select>
                    <div className='invalid-feedback'>
                      Please provide position type.
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Position Location'
                      placeholder='Position Location'
                    />
                    <div className='invalid-feedback'>
                      Please enter position location .
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      id='Title of Position'
                      placeholder='Title of Position'
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
                        type='file'
                        className='w-file-upload-input form-control UploadImg'
                        accept='.pdf, .doc, .docx, .txt'
                        name='Resume-Upload'
                        data-iconName='fa-solid fa-cloud-arrow-up'
                        data-name='Upload Job Description, If Available'
                        aria-hidden='true'
                        id='Resume-Upload'
                        placeholder='Upload Job Description, If Available'
                        tabindex='-1'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='text-field w-input form-control'
                        maxlength='256'
                        name='How-Did-You-Hear-About-Us'
                        data-name='How Did You Hear About Us?'
                        placeholder='How Did You Hear About Us?'
                        id='How-Did-You-Hear-About-Us'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <textarea
                        placeholder='Or Alternately, Describe Position:'
                        maxlength='5000'
                        id='Message'
                        name='Message'
                        data-name='field'
                        className='form-control'
                      ></textarea>
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
