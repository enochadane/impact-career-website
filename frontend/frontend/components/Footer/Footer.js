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
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            <div className='social'>
              <h4>Social Media</h4>
              <div className='social-icons'>
                <a href='#' className='fa fa-facebook style'></a>
                <a href='#' className='fa fa-linkedin style'></a>
                <a href='#' className='fa fa-twitter style'></a>
                <a href='#' className='fa fa-youtube style'></a>
              </div>
            </div>
          </div>
          <div className='bottom-footer'>
            <div className='bottom-footer-content'>
              <h4>Copyright © 2022 IMPACT CAREERS. All rights reserved.</h4>
              <a href='#' className='privacy-link'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
