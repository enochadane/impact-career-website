import Head from 'next/head';
export default function Privacy({ posts, name }) {
  return (
    <>
      <div>
        <Head>
          <title>Jobs</title>
        </Head>
        <div className='Banner privacy-banner'>
          <div className='container-fluid'>
            <div className='row m-0'>
              <div>
                <h1>Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className='container information'>
          <h4>Information We Collect</h4>
          <p>
            We gather information about you from various sources, including
            information we obtain directly from you when you use our sites, our
            services, or view our online advertisements. We may also gather
            information about you from other sources, including third parties,
            data providers, and partners.
          </p>

          <p>
            We use this data to analyze and enhance its website. There is no way
            to trace this information back to you as a specific user. You can
            place service orders, submit requests, and sign up to receive
            materials on various sites. These pages may gather your name,
            address, email, and phone number. We may also ask you to voluntarily
            give us information about your personal or professional interests,
            demographics, experience with our services, and contact preferences
            to personalize our future messages to you and constantly enhance our
            services.
          </p>

          <p>
            For employers, we get information directly from you when you visit
            our websites, post a job opening, register for an account, edit your
            profile, seek information from us, or decide to participate in one
            of our surveys.
          </p>
          <h4>How We Use Your Information</h4>
          <p>
            We use this data to understand your requirements better and meet
            your demands. In addition, we use your information to assist you in
            meeting a goal, to get in touch with you, to keep you informed about
            services, and otherwise customize our website for you.
          </p>
          <p>
            For job seekers, we use your information to submit your application
            for an employment opportunity; to notify you of potential employment
            opportunities; to facilitate your hiring if your application is, and
            to inform you about the latest product developments and other
            information from us or from our business partners that we believe
            would be of interest to you.
          </p>
          <p>
            For employers, we use your information for a variety of general
            purposes, including responding to your requests for services and
            products, providing information about our services and products, and
            updating you on new product developments and other information from
            our business partners or us that we think you'll find interesting.
          </p>
          <h4>How Long will keep your information</h4>
          <p>
            We will keep your personal information for as long as it is required
            to provide you with the services you have requested or as long as it
            is required to be kept for other legal reasons, such as audit,
            security, and fraud prevention.
          </p>
          <h4>Changes Our Policy</h4>
          <p>
            Changes to this Policy will be posted on our sites and will take
            effect immediately upon posting. We will highlight any significant
            changes we make to this Policy when we publish the changes.
          </p>
          <p>
            Impact Career values your privacy. We are fully committed to
            protecting the confidential information you submit to us. However,
            we recognize that you have a right to privacy about any personal
            information we have about you.
          </p>
          <p>
            Impact Careers adheres to all local, national, and international
            privacy regulations and has mechanisms to do so.
          </p>
        </div>
      </div>
    </>
  );
}
