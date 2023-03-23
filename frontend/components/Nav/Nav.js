import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ActiveLink from "../ActiveLink/ActiveLink";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SignupModal from "../SignupModal/SignupModal";
import SignInModal from "../SignInModal/SignInModal";

import { userActions } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  return (
    <>
      <SignupModal />
      <SignInModal />
      <div className='nav'>
        <section id='home-page'>
          <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top p-0 shadow-sm'>
            <div className='container'>
              <Link href='/' className='navbar-brand'>
                <Image
                  src='/images/headerLogo.png'
                  width={60}
                  height={60}
                  alt='Header logo'
                ></Image>
              </Link>
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
                  {user.email && (
                    <li>
                      <ActiveLink
                        className='nav-link resource px-4'
                        href='/profile'
                      >
                        Profile
                      </ActiveLink>
                    </li>
                  )}
                  {user.email && (
                    <li>
                      <ActiveLink className='nav-link resource px-4' href='/'>
                        Recommendations
                      </ActiveLink>
                    </li>
                  )}
                  <li>
                    <ActiveLink
                      className='nav-link resource px-4'
                      href='/about'
                    >
                      About
                    </ActiveLink>
                  </li>

                  <li>
                    <ActiveLink className='nav-link resource px-4' href='/jobs'>
                      Jobs
                    </ActiveLink>
                  </li>
                  <li>
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
                        <ActiveLink
                          className='dropdown-item color'
                          href='/resources#training-Section'
                        >
                          {" "}
                          Training Resources
                        </ActiveLink>{" "}
                      </li>
                      <li>
                        <ActiveLink
                          className='dropdown-item'
                          href='/resources#interview-Section'
                        >
                          Interview Prep
                        </ActiveLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ActiveLink
                      className='nav-link resource px-4'
                      href='/contact'
                    >
                      Contact
                    </ActiveLink>
                  </li>
                </ul>
                <Box
                  sx={{ display: "flex", gap: "10px", textDecoration: "none" }}
                >
                  {!user.email && (
                    <Button
                      onClick={() => dispatch(userActions.loginModalVisible())}
                      variant='contained'
                    >
                      Sign In
                    </Button>
                  )}
                  {!user.email && (
                    <Button
                      onClick={() =>
                        dispatch(userActions.registerModalVisible())
                      }
                      variant='contained'
                    >
                      Sign Up
                    </Button>
                  )}
                  {user.email && (
                    <Button
                      onClick={() => {
                        dispatch(userActions.clearUserData());
                        router.push("/");
                      }}
                      variant='contained'
                    >
                      Logout
                    </Button>
                  )}
                </Box>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}
