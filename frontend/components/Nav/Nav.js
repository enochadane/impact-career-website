import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <div className='nav'>
        <section id='home-page'>
          <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top p-0 shadow-sm'>
            <div className='container'>
              <a href='/' className='navbar-brand'>
                <Image
                  src='/images/headerLogo.png'
                  width={60}
                  height={60}
                ></Image>
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavDropdown'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse justify-content-center'
                id='navbarNavDropdown'
              >
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <a className='nav-link resource px-4' href='/about'>
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link resource px-4' href='jobs'>
                      Jobs
                    </a>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link'
                      href='resources'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Resources <i className='fa-solid fa-chevron-down'></i>
                    </a>
                    <ul
                      className='dropdown-menu shadow border-0'
                      aria-labelledby='navbarDropdown'
                    >
                      <li>
                        <a
                          className='dropdown-item color'
                          href='/resources#training-Section'
                        >
                          Training Resources
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='/resources#interview-Section'
                        >
                          Interview Prep
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className='btnDiv'>
                  <a href='/contact'>
                    <button className='ContactButton'>contact</button>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}
