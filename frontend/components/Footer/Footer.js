import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <footer>
      <div className='black-footer'>
        <div className='container'>
          <div className='top-footer'>
            <div className='footer-brand'>
              <a href='index.html'>
                <Image
                  src='/images/footerLogo.png'
                  width={100}
                  height={100}
                ></Image>
              </a>
              <div>
                <Image
                  src='/images/navobaLogo.png'
                  width={110}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className='social'>
              <h4>Social Media</h4>
              <div className='social-icons'>
                <a
                  href='https://www.facebook.com/theimpactcareers?_rdc=1&_rdr/'
                  className='fa fa-facebook style'
                  target='_blank'
                ></a>
                <a
                  href='https://www.linkedin.com/company/impactcareer/'
                  className='fa fa-linkedin style'
                  target='_blank'
                ></a>
                <a
                  href='https://twitter.com/CareersImpact'
                  className='fa fa-twitter style'
                  target='_blank'
                ></a>
                <a
                  href='https://www.youtube.com/channel/UCRZpHz6vExdZ1wDRMXyFyOQ'
                  className='fa fa-youtube style'
                  target='_blank'
                ></a>
              </div>
            </div>
          </div>
          <div className='bottom-footer'>
            <div className='bottom-footer-content'>
              <h4>Copyright © 2022 IMPACT CAREERS. All rights reserved.</h4>
              <a href='/privacy-policy' className='privacy-link'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
