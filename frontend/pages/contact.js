import { useState } from "react";

import Image from "next/image";
import Head from "next/head";
import ContactForm from "../components/form/ContactForm";
import LookingForEmployment from "../components/ApplyModal/LookingForEmployment";
import JobSubmitModal from "../components/JobSubmitModal/JobSubmitModal";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Contact() {
  const [employerModalVisible, setEmployerModalVisible] = useState(false);
  const [candidateModalVisible, setCandidateModalVisible] = useState(false);

  return (
    <>
      <JobSubmitModal
        visible={employerModalVisible}
        onClose={() => setEmployerModalVisible(false)}
      />
      <LookingForEmployment
        visible={candidateModalVisible}
        onClose={() => setCandidateModalVisible(false)}
      />
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

        {/* form section */}
        <div>
          {/* <ContactForm /> */}
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
              <Box
                sx={{
                  // border: '1px solid red',
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <Button
                  variant='outlined'
                  onClick={() => setCandidateModalVisible(true)}
                >
                  Seeking for employment
                </Button>
                <Button
                  variant='outlined'
                  onClick={() => setEmployerModalVisible(true)}
                >
                  Looking for candidates
                </Button>
              </Box>
              {/* <ContactForm /> */}
            </div>
          </section>
        </div>
        {/* form section */}
      </div>
    </>
  );
}
