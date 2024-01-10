import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Nav() {
  return (
    <footer>
      <div className='black-footer'>
        <div className='container'>
          <div className='top-footer'>
            <div className='footer-brand'>
              <Link href='index.html'>
                <Image
                  src='/images/footerLogo.png'
                  width={100}
                  height={100}
                  alt='footer logo'
                ></Image>
              </Link>
              <div>
                <Image
                  src='/images/navobaLogo.png'
                  width={110}
                  height={100}
                  alt='nav bar logo'
                ></Image>
              </div>
            </div>
            <div className='social'>
              <h5>Follow us at</h5>
              <div className='social-icons'>
                <Link
                  href='https://www.facebook.com/theimpactcareers?_rdc=1&_rdr/'
                  className='fa fa-facebook style'
                  target='_blank'
                ></Link>
                <Link
                  href='https://www.linkedin.com/company/impactcareer/'
                  className='fa fa-linkedin style'
                  target='_blank'
                ></Link>
                <Link
                  href='https://twitter.com/CareersImpact'
                  className='fa fa-twitter style'
                  target='_blank'
                ></Link>
                <Link
                  href='https://www.youtube.com/channel/UCRZpHz6vExdZ1wDRMXyFyOQ'
                  className='fa fa-youtube style'
                  target='_blank'
                ></Link>
              </div>
            </div>
          </div>
          <div className='bottom-footer'>
            <div className='bottom-footer-content'>
              <p>
                Copyright © {new Date().getFullYear()} IMPACT CAREERS. All
                rights reserved.
              </p>
              <p>Owned and Operated by LEX 560 Corp, Fort Lauderdale FL USA</p>
              <Link href='/privacy-policy' className='privacy-link'>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
